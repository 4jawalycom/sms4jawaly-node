# SMS4Jawaly Node.js SDK

<div dir="rtl">

## 🇸🇦 عربي

مكتبة Node.js/JavaScript لإرسال الرسائل النصية القصيرة عبر بوابة 4jawaly للرسائل

### المتطلبات

- Node.js 12 أو أحدث
- npm أو yarn

### التثبيت

```bash
npm install sms4jawaly-node
# أو باستخدام yarn
yarn add sms4jawaly-node
```

### الاستخدام

#### JavaScript

```javascript
const { SMS4JawalyClient } = require('sms4jawaly-node');

const client = new SMS4JawalyClient(
    'your_api_key',
    'your_api_secret',
    'YOUR_SENDER_NAME'
);

// إرسال رسالة لرقم واحد
client.sendSingleSMS('966500000000', 'مرحباً من 4jawaly!')
    .then(response => {
        console.log('تم إرسال الرسالة بنجاح!');
    })
    .catch(error => {
        console.error('حدث خطأ:', error);
    });

// إرسال رسالة لعدة أرقام
const numbers = ['966500000000', '966500000001'];
client.sendSMS(numbers, 'رسالة جماعية من 4jawaly!')
    .then(response => {
        console.log(`تم إرسال: ${response.total_success}`);
    });
```

</div>

## 🇬🇧 English

Node.js/JavaScript library for sending SMS messages through the 4jawaly SMS Gateway

### Requirements

- Node.js 12 or later
- npm or yarn

### Installation

```bash
npm install sms4jawaly-node
# or using yarn
yarn add sms4jawaly-node
```

### Usage

#### JavaScript

```javascript
const { SMS4JawalyClient } = require('sms4jawaly-node');

const client = new SMS4JawalyClient(
    'your_api_key',
    'your_api_secret',
    'YOUR_SENDER_NAME'
);

// Send message to a single number
client.sendSingleSMS('966500000000', 'Hello from 4jawaly!')
    .then(response => {
        console.log('Message sent successfully!');
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });

// Send message to multiple numbers
const numbers = ['966500000000', '966500000001'];
client.sendSMS(numbers, 'Bulk message from 4jawaly!')
    .then(response => {
        console.log(`Sent: ${response.total_success}`);
    });
```

## 🇫🇷 Français

Bibliothèque Node.js/JavaScript pour l'envoi de SMS via la passerelle SMS 4jawaly

### Prérequis

- Node.js 12 ou plus récent
- npm ou yarn

### Installation

```bash
npm install sms4jawaly-node
# ou avec yarn
yarn add sms4jawaly-node
```

### Utilisation

#### JavaScript

```javascript
const { SMS4JawalyClient } = require('sms4jawaly-node');

const client = new SMS4JawalyClient(
    'your_api_key',
    'your_api_secret',
    'YOUR_SENDER_NAME'
);

// Envoyer un message à un seul numéro
client.sendSingleSMS('966500000000', 'Bonjour de 4jawaly!')
    .then(response => {
        console.log('Message envoyé avec succès!');
    })
    .catch(error => {
        console.error('Une erreur est survenue:', error);
    });

// Envoyer un message à plusieurs numéros
const numbers = ['966500000000', '966500000001'];
client.sendSMS(numbers, 'Message groupé de 4jawaly!')
    .then(response => {
        console.log(`Envoyé: ${response.total_success}`);
    });
```

<div dir="rtl">

## 🇵🇰 اردو

4jawaly SMS گیٹ وے کے ذریعے SMS پیغامات بھیجنے کے لیے Node.js/JavaScript لائبریری

### ضروریات

- Node.js 12 یا اس سے نئی ورژن
- npm یا yarn

### انسٹالیشن

```bash
npm install sms4jawaly-node
# یا yarn کے ساتھ
yarn add sms4jawaly-node
```

### استعمال

#### JavaScript

```javascript
const { SMS4JawalyClient } = require('sms4jawaly-node');

const client = new SMS4JawalyClient(
    'your_api_key',
    'your_api_secret',
    'YOUR_SENDER_NAME'
);

// ایک نمبر پر پیغام بھیجیں
client.sendSingleSMS('966500000000', '4jawaly سے سلام!')
    .then(response => {
        console.log('پیغام کامیابی سے بھیج دیا گیا!');
    })
    .catch(error => {
        console.error('ایک خرابی پیش آگئی:', error);
    });

// متعدد نمبروں پر پیغام بھیجیں
const numbers = ['966500000000', '966500000001'];
client.sendSMS(numbers, '4jawaly سے اجتماعی پیغام!')
    .then(response => {
        console.log(`بھیجے گئے: ${response.total_success}`);
    });
```

</div>

## 📚 API Documentation / التوثيق / Documentation / دستاویزات

### SMS4JawalyClient

```typescript
class SMS4JawalyClient {
    constructor(apiKey: string, apiSecret: string, sender: string);
    
    // Send to single number / إرسال لرقم واحد / Envoyer à un seul numéro / ایک نمبر پر بھیجیں
    sendSingleSMS(number: string, message: string): Promise<SMSResponse>;
    
    // Send to multiple numbers / إرسال لعدة أرقام / Envoyer à plusieurs numéros / متعدد نمبروں پر بھیجیں
    sendSMS(numbers: string[], message: string): Promise<SMSResponse>;
    
    // Check balance / فحص الرصيد / Vérifier le solde / بیلنس چیک کریں
    getBalance(isActive?: number): Promise<BalanceResponse>;
}

interface SMSResponse {
    success: boolean;
    total_success: number;
    total_failed: number;
    job_ids: string[];
    errors?: Record<string, string[]>;
}

interface BalanceResponse {
    balance: number;
    packages?: Package[];
}
```

## 📝 License / الترخيص / Licence / لائسنس

MIT License / رخصة MIT / Licence MIT / MIT لائسنس
