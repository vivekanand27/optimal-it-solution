import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MailerService } from '@nestjs-modules/mailer';
import { Contact } from './schemas/contact.schema';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<Contact>,
    private readonly mailerService: MailerService,
  ) {}

  async submit(dto: CreateContactDto) {
    const contact = await this.contactModel.create(dto);

    const to = process.env.MAIL_TO ?? 'optimalitsolution26@gmail.com';
    const sendEmail = process.env.MAIL_HOST && process.env.MAIL_USER;

    if (sendEmail) {
      try {
        await this.mailerService.sendMail({
          to,
          subject: `[Contact Form] Message from ${dto.name}`,
          text: `Name: ${dto.name}\nEmail: ${dto.email}\n\nMessage:\n${dto.message}`,
          replyTo: dto.email,
        });
      } catch (err) {
        console.error('Failed to send contact email:', err);
        // Still return success; we saved to DB
      }
    }

    return { id: contact._id.toString(), message: 'Message received' };
  }
}
