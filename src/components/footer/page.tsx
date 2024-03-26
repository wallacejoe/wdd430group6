import Image from 'next/image';
import Link from 'next/link';
import './styles.css';


export default function Footer() {
  return <div className='footer'>
       
        <div className='footerLinks'>
        <div className='footerLogo'>
        <Image
            src='/Artisan.png'
            alt='Logo'
            width={50}
            height={50}
        />
        </div>
        <div className='footerGroup'>
            
            <p>Group 6  - WDD430 </p>
        </div>
        <div className='footerSocials'>
        <Link href='https://www.facebook.com/'>
            <Image
            src="/facebook.png"
            alt='Facebook'
            width={50}
            height={50} />
        </Link>
        <Link href='https://www.instagram.com/'>
            <Image
            src='/instagram.png'
            alt='Instagram'
            width={50}
            height={50} />
        </Link>
        </div>
        </div>
    
  </div>;
}
