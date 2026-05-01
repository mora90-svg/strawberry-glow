// بسيط: فتح/إغلاق القائمة، إرسال ��موذج وهمي، وتحديث السنة في الفوتر
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  // smooth scroll للروابط الداخلية
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
        nav.classList.remove('show');
      }
    });
  });

  // نموذج (محاكاة إرسال)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    if(!data.get('name') || !data.get('email') || !data.get('message')){
      status.textContent = 'يرجى ملء جميع الحقول.';
      status.style.color = 'crimson';
      return;
    }
    status.textContent = 'جارٍ الإرسال...';
    status.style.color = 'var(--muted)';
    setTimeout(()=>{
      status.textContent = 'تم إرسال الرسالة بنجاح — شكراً لك!';
      status.style.color = 'green';
      form.reset();
    }, 900);
  });

  // سنة الفوتر
  document.getElementById('year').textContent = new Date().getFullYear();
});
