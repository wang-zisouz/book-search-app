import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient, withFetch } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [provideHttpClient(withFetch())]
}).catch((err) => console.error(err));

// bootstrapApplication = 启动 Angular 应用
// 第一个参数 App = 告诉 Angular 以 App 组件为“根组件”
// 第二个参数 { providers: [...] } = 给应用提供全局服务（这里是 HttpClient）
