const menuToggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));document.getElementById('year').textContent=new Date().getFullYear();document.querySelectorAll('.tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(t=>{t.classList.remove('active');t.setAttribute('aria-selected','false')});tab.classList.add('active');tab.setAttribute('aria-selected','true');document.querySelectorAll('.video-card').forEach(card=>card.classList.toggle('hidden',tab.dataset.filter!=='all'&&card.dataset.category!==tab.dataset.filter));}));const modal=document.getElementById('videoModal'),player=document.getElementById('modalPlayer'),error=document.getElementById('videoError');function openVideo(src){error.textContent='';player.pause();player.src=src;modal.classList.add('open');modal.setAttribute('aria-hidden','false');player.load();player.play().catch(()=>{error.textContent='Video file not found yet. Add the matching MP4 to the assets/videos folder, or use “Add video files” to preview a video from your computer.';});}document.querySelectorAll('.play-button').forEach(b=>b.addEventListener('click',()=>openVideo(b.dataset.video)));function closeModal(){player.pause();player.removeAttribute('src');player.load();modal.classList.remove('open');modal.setAttribute('aria-hidden','true');}document.querySelector('.modal-close').addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});document.getElementById('videoPicker').addEventListener('change',e=>{const files=[...e.target.files];const target=document.getElementById('customVideos');files.forEach(file=>{const url=URL.createObjectURL(file);const item=document.createElement('div');item.className='custom-video-item';const video=document.createElement('video');video.controls=true;video.src=url;const label=document.createElement('p');label.textContent=file.name;item.append(video,label);target.append(item);});});
const laundryForm=document.getElementById('laundryBooking');
if(laundryForm){
 const dateField=laundryForm.querySelector('input[name="preferredDate"]');
 const today=new Date(); const localToday=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().slice(0,10);
 dateField.min=localToday;
 laundryForm.addEventListener('submit',event=>{
  event.preventDefault();
  if(!laundryForm.reportValidity()) return;
  const data=new FormData(laundryForm);
  const message=[
   'Hello Discover7 Cleaning Services, I would like to make a booking.',
   '',
   'Name: '+data.get('customerName'),
   'Service: '+data.get('service'),
   'Pickup / service location: '+data.get('location'),
   'Preferred date: '+data.get('preferredDate'),
   'Extra instructions: '+(data.get('notes')||'None provided'),
   '',
   'Please confirm availability and the final quotation. Thank you.'
  ].join('\n');
  window.open('https://wa.me/254758983329?text='+encodeURIComponent(message),'_blank','noopener');
 });
}
