/*
 * Project: Jacqueline Taylor & Friends
 *
 * Created on Sun Apr 24 2022
 *
 * Filename: signup.js
 *
 * Copyright (c) 2022 Bujisoft
 */



import Header from '../components/Header';
import Link from 'next/link';
import Script from 'next/script';

export default function Signup() {
return(
  <>
<Header/>
  <Script src='https://app.mymusicstaff.com/Widget/v3/Registration.ashx?id=sch_smyJm' class='sb_registration'/>
 
  <h2>
    {/* <Link href="/">
      <a>Back to home</a>
    </Link> */}
  </h2>
</>
);
}





  /* return (
    <>
      <head>
    
         <script type='text/javascript' src='https://app.mymusicstaff.com/Widget/v3/Registration.ashx?id=sch_smyJm' class='sb_registration'></script>

      </head>


  
    <main>
      
      <Header3 />
      <br></br>
  



  
   
    
    </main>
    </>
  );//
}
 */