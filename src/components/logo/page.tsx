import Image from 'next/image';
import Link from 'next/link';
import './styles.css';

export default function Logo() {
  return ( <div className='homeLogo'>
     <Link href='/dashboard'>
        <Image
            src='/Artisan.png'
            alt='Artisan Logo'
            width={50}
            height={50}
        />
         </Link>
        </div>
  )
        }