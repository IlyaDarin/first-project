# 📱 Инструкция по созданию APK файла

## Быстрый старт

Этот проект использует **Capacitor** для создания нативных мобильных приложений из веб-кода.

### Шаг 1: Установка зависимостей

```bash
npm install
```

### Шаг 2: Инициализация Capacitor (если ещё не инициализирован)

```bash
npx cap init
```

Вас спросят:
- **App name:** French Verbs Trainer
- **App ID:** com.frenchverbs.trainer

### Шаг 3: Добавление Android платформы

```bash
npx cap add android
```

### Шаг 4: Синхронизация веб-файлов

```bash
npx cap sync
```

### Шаг 5: Открытие в Android Studio

```bash
npx cap open android
```

### Шаг 6: Сборка APK в Android Studio

1. Откроется Android Studio
2. Дождитесь завершения индексации проекта
3. В меню выберите: **Build → Build Bundle(s) / APK(s) → Build APK(s)**
4. После завершения сборки нажмите **locate** в появившемся уведомлении
5. APK файл будет в папке: `android/app/build/outputs/apk/debug/app-debug.apk`

### Шаг 7: Загрузка на GitHub

1. Перейдите в репозиторий на GitHub
2. Нажмите **Releases** → **Create a new release**
3. Укажите версию (например, v1.0.0)
4. Прикрепите APK файл в разделе **Attach binaries**
5. Опубликуйте релиз

## 🔧 Альтернативные способы

### Через командную строку (без Android Studio)

Если у вас установлен Android SDK:

```bash
cd android
./gradlew assembleDebug
```

APK файл будет в: `app/build/outputs/apk/debug/app-debug.apk`

### Создание релизной версии (подписанный APK)

Для публикации в Google Play нужен подписанный APK:

1. Создайте keystore:
```bash
keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-alias
```

2. Добавьте в `android/app/build.gradle`:
```gradle
android {
    signingConfigs {
        release {
            storeFile file("path/to/my-release-key.jks")
            storePassword "your-password"
            keyAlias "my-alias"
            keyPassword "your-password"
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
}
```

3. Соберите релизный APK:
```bash
cd android
./gradlew assembleRelease
```

## ⚠️ Важные заметки

- Папки `android/`, `ios/`, `.capacitor/` добавлены в `.gitignore` — не загружайте их на GitHub
- На GitHub загружайте только APK файлы через раздел Releases
- Для тестирования достаточно debug-версии APK
- Для публикации в Google Play нужна подписанная release-версия

## 🆘 Проблемы и решения

### Ошибка: "Android Studio not found"
Установите Android Studio с официального сайта: https://developer.android.com/studio

### Ошибка: "SDK not found"
В Android Studio: **Tools → SDK Manager** → установите Android SDK

### Ошибка при сборке
Попробуйте очистить кеш:
```bash
npx cap clean
npx cap sync
```
