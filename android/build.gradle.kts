plugins {
    id("com.android.application") version "8.7.3"
    id("org.jetbrains.kotlin.android") version "2.0.21"
}

// Webová Kuchapka (o složku výš, v tomtéž repozitáři) se při sestavení zkopíruje do aplikace.
val kuchapkaSrc = System.getenv("KUCHAPKA_SRC") ?: rootProject.file("..").path
val webOut = layout.buildDirectory.dir("kuchapka-web")
val iconOut = layout.buildDirectory.dir("kuchapka-icon")

val prepareWeb by tasks.registering(Copy::class) {
    from(kuchapkaSrc) {
        include("index.html", "styles.css", "app.js", "manifest.json", "icon-192.png", "icon-512.png")
    }
    into(webOut.map { it.dir("web") })
    doFirst { require(file("$kuchapkaSrc/app.js").exists()) { "Chybí Kuchapka v $kuchapkaSrc (nastav KUCHAPKA_SRC)" } }
}
val prepareIcon by tasks.registering(Copy::class) {
    from("$kuchapkaSrc/icon-512.png") { rename { "ic_launcher.png" } }
    into(iconOut.map { it.dir("mipmap-xxxhdpi") })
}

android {
    namespace = "cz.kuchapka.app"
    compileSdk = 34

    defaultConfig {
        applicationId = "cz.kuchapka.app"
        minSdk = 26
        targetSdk = 34
        versionCode = 3
        versionName = "1.2"
    }

    // Stejný stálý klíč jako panel (GitHub secret PANEL_KEYSTORE_B64), aby šly aktualizace.
    val ksPath = System.getenv("PANEL_KEYSTORE")
    if (ksPath != null) {
        signingConfigs {
            getByName("debug") {
                storeFile = file(ksPath)
                storePassword = System.getenv("PANEL_KEYSTORE_PASSWORD")
                keyAlias = "panel"
                keyPassword = System.getenv("PANEL_KEYSTORE_PASSWORD")
            }
        }
    }

    sourceSets["main"].assets.srcDir(webOut)
    sourceSets["main"].res.srcDir(iconOut)

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions {
        jvmTarget = "17"
    }
}

tasks.named("preBuild") { dependsOn(prepareWeb, prepareIcon) }
