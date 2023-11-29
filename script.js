document.addEventListener("DOMContentLoaded", function() 
  {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });
    
    const fadeIns = document.querySelectorAll('.fade-in');
    fadeIns.forEach(fadeIn => {
      observer.observe(fadeIn);
    });


    const fadeRights1 = document.querySelectorAll('.fade-right1');
    fadeRights1.forEach(fadeRight => {
    observer.observe(fadeRight);
    });

    const fadeRights = document.querySelectorAll('.fade-right');
    fadeRights.forEach(fadeRight => {
    observer.observe(fadeRight);
    });

    const fadeRights2 = document.querySelectorAll('.fade-right2');
    fadeRights2.forEach(fadeRight => {
    observer.observe(fadeRight);
    });
    

    const fadeRights3 = document.querySelectorAll('.fade-right3');
    fadeRights3.forEach(fadeRight => {
    observer.observe(fadeRight);
    });
    
    const fadeRights4 = document.querySelectorAll('.fade-right4');
    fadeRights4.forEach(fadeRight => {
    observer.observe(fadeRight);
    });
    
    const fadeRights5 = document.querySelectorAll('.fade-right5');
    fadeRights5.forEach(fadeRight => {
    observer.observe(fadeRight);
    });

    const fadeleft = document.querySelectorAll('.fade-left');
    fadeleft.forEach(fadeleft => {
    observer.observe(fadeleft);
    });

    const fadeleft1 = document.querySelectorAll('.fade-left1');
    fadeleft1.forEach(fadeleft => {
    observer.observe(fadeleft);
    });

  });