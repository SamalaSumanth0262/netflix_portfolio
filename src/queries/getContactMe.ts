// queries/getContactMe.ts
import { ContactMe } from '../types';
import headshot from '../images/headshot.png';

export async function getContactMe(): Promise<ContactMe> {
  return {
    profilePicture: { url: headshot },
    name: 'Oluwapelumi Adenikinju',
    title: 'Cloud Engineer / Solutions Architect',
    summary:
      'Cloud infrastructure expert specializing in Azure and AWS environments. Passionate about building secure, scalable systems and automating everything.',
    companyUniversity: 'Houston, TX',
    linkedinLink: 'https://www.linkedin.com/in/pelumiade/',
    email: 'pelumi.adeni@gmail.com',
    phoneNumber: '', // Intentionally empty - not displayed
  };
}
