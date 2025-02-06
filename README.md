# SMS4Jawaly Node.js SDK

مكتبة Node.js/JavaScript لإرسال الرسائل النصية القصيرة عبر بوابة 4jawaly للرسائل

## المتطلبات

- Node.js 12 أو أحدث
- npm أو yarn

## التثبيت

```bash
npm install sms4jawaly-node
# أو باستخدام yarn
yarn add sms4jawaly-node
```

## الاستخدام

### JavaScript

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
        if (response.success) {
            console.log('تم إرسال الرسالة بنجاح!');
            console.log('معرفات المهام:', response.job_ids.join(', '));
        }
    })
    .catch(error => {
        console.error('حدث خطأ:', error);
    });

// إرسال رسالة لعدة أرقام
const numbers = ['966500000000', '966500000001'];
client.sendSMS(numbers, 'رسالة جماعية من 4jawaly!')
    .then(response => {
        console.log(`تم إرسال: ${response.total_success}`);
        console.log(`فشل إرسال: ${response.total_failed}`);
    })
    .catch(error => {
        console.error('حدث خطأ:', error);
    });

// الاستعلام عن الرصيد
client.getBalance(1) // 1 للباقات النشطة فقط
    .then(response => {
        console.log(`الرصيد: ${response.balance}`);
        if (response.packages) {
            response.packages.forEach(pkg => {
                console.log(`الباقة ${pkg.id}:`);
                console.log(`  النقاط: ${pkg.package_points}`);
                console.log(`  النقاط المتبقية: ${pkg.current_points}`);
                console.log(`  تاريخ الانتهاء: ${pkg.expire_at}`);
            });
        }
    })
    .catch(error => {
        console.error('حدث خطأ:', error);
    });
```

### TypeScript

```typescript
import { SMS4JawalyClient } from 'sms4jawaly-node';

const client = new SMS4JawalyClient(
    'your_api_key',
    'your_api_secret',
    'YOUR_SENDER_NAME'
);

async function sendMessage() {
    try {
        const response = await client.sendSingleSMS('966500000000', 'مرحباً من 4jawaly!');
        if (response.success) {
            console.log('تم إرسال الرسالة بنجاح!');
            console.log('معرفات المهام:', response.job_ids.join(', '));
        }
    } catch (error) {
        console.error('حدث خطأ:', error);
    }
}

async function checkBalance() {
    try {
        const balance = await client.getBalance();
        console.log(`الرصيد: ${balance.balance}`);
    } catch (error) {
        console.error('حدث خطأ:', error);
    }
}
```

## الواجهة البرمجية (API)

### `SMS4JawalyClient`

#### Constructor

```typescript
constructor(apiKey: string, apiSecret: string, sender: string)
```

#### Methods

- `sendSingleSMS(number: string, message: string): Promise<SMSResponse>`
- `sendSMS(numbers: string[], message: string): Promise<SMSResponse>`
- `getBalance(isActive?: number): Promise<BalanceResponse>`

### الأنواع (Types)

```typescript
interface SMSResponse {
    success: boolean;
    total_success: number;
    total_failed: number;
    job_ids: string[];
    errors?: Record<string, string[]>;
}

interface Package {
    id: number;
    package_points: number;
    current_points: number;
    expire_at: string;
    is_active: boolean;
}

interface BalanceResponse {
    balance: number;
    packages?: Package[];
}
```

## المساهمة

1. Fork المشروع
2. إنشاء فرع للميزة (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add some amazing feature'`)
4. Push إلى الفرع (`git push origin feature/amazing-feature`)
5. فتح Pull Request

## الترخيص

MIT License
