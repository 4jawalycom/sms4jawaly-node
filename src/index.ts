import axios, { AxiosInstance } from 'axios';

interface SMSRequest {
  numbers: string[];
  message: string;
  sender: string;
}

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

export class SMS4JawalyClient {
  private client: AxiosInstance;
  private sender: string;

  constructor(apiKey: string, apiSecret: string, sender: string) {
    this.sender = sender;
    this.client = axios.create({
      baseURL: 'https://api.4jawaly.com',
      auth: {
        username: apiKey,
        password: apiSecret
      }
    });
  }

  async sendSingleSMS(number: string, message: string): Promise<SMSResponse> {
    return this.sendSMS([number], message);
  }

  async sendSMS(numbers: string[], message: string): Promise<SMSResponse> {
    const request: SMSRequest = {
      numbers,
      message,
      sender: this.sender
    };

    const response = await this.client.post<SMSResponse>('/api/v1/sms/send', request);
    return response.data;
  }

  async getBalance(isActive?: number): Promise<BalanceResponse> {
    const params = isActive !== undefined ? { is_active: isActive } : undefined;
    const response = await this.client.get<BalanceResponse>('/api/v1/account/balance', { params });
    return response.data;
  }
}
