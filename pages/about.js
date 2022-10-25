import styles from '../styles/Home.module.css'

export default function aboutus() {
  return (
    < div class={styles.page} >
      
    <nav className={styles.nav}>
    <div class={styles.logo}>
        <p>MEDIPAL</p>
      </div>
      
    
     <a href="/signup">SIGN UP</a>
     <a href="/login">LOGIN</a>
     <a href="/hospitals">HOSPITALS</a>
     <a href="/services">SERVICES</a>
     <a href="/aboutus">ABOUT US</a>
     <a href="/homepage">Home</a>
    
  </nav>
   

        <img src="shead.jpg" class={styles.about}></img>
         
        <img src="shead1.jpg" class={styles.im1}></img>
        
        <p class={styles.im2}>WELCOME TO MEDIPAL </p>
        <p class={styles.im3}>BEST CARE FOR YOUR GOOD HEALTH </p>
        <p class={styles.im4}>WHAT WE OFFER</p>
        <p class={styles.im5}> * An overview of different hospitals which provides a better chance at healthcare</p>
        <p class={styles.im5}> * Find doctors by their specialities</p>
        <p class={styles.im5}> * Book appointments online</p>
        <p class={styles.im5}> * Get an overview of services offered by different hsopitals</p>
       <div class={styles.foot}>
       <div class={styles.logo2} >
        <p>MEDIPAL</p>
      </div>
      <p class={styles.im7}>Leading the way in Medical Execellence, Trusted Care.</p>
      <p class={styles.im8}>For feedback or concerns, please email us at queries@hospals.com</p>
     
      

       </div>
        

</div>
        
  );
}