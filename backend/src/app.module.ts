import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MailerModule } from '@nestjs-modules/mailer';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URI ?? 'mongodb://localhost:27017/optimal-it'),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST ?? 'smtp.example.com',
        port: parseInt(process.env.MAIL_PORT ?? '587', 10),
        secure: process.env.MAIL_SECURE === 'true',
        auth: process.env.MAIL_USER
          ? {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS,
            }
          : undefined,
      },
      defaults: {
        from: process.env.MAIL_FROM ?? '"Optimal IT Solution" <noreply@optimalitsolution.com>',
      },
    }),
    ContactModule,
  ],
})
export class AppModule {}
