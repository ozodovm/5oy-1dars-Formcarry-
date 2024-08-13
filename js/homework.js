// Header section
const header = document.querySelector('header');
const nav = document.createElement('nav');
nav.className = 'flex justify-between items-center p-6 bg-white';
header.appendChild(nav);

const logo = document.createElement('div');
logo.className = 'text-2xl font-bold text-blue-900';
const logoImg = document.createElement('img');
logoImg.src = 'img/mainlogo.svg'; 
logoImg.alt = 'Formcarry Logo';
logo.appendChild(logoImg);
nav.appendChild(logo);

const navLinks = document.createElement('div');
navLinks.className = 'flex gap-[44px] text-blue-900';
nav.appendChild(navLinks);

const links = ['FAQ', 'Docs', 'Integrations', 'Pricing'];
links.forEach(linkText => {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = linkText;
    link.className = 'hover:text-blue-500';
    navLinks.appendChild(link);
});

const navAuth = document.createElement('div');
navAuth.className = 'flex items-center gap-[32px]';
nav.appendChild(navAuth);

const loginLink = document.createElement('a');
loginLink.href = '#';
loginLink.textContent = 'Login';
loginLink.className = 'hover:text-blue-500';
navAuth.appendChild(loginLink);

const signUpLink = document.createElement('a');
signUpLink.href = '#';
signUpLink.textContent = 'Sign up';
signUpLink.className = 'bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800';
navAuth.appendChild(signUpLink);

// Main section
const main = document.querySelector('main');
main.className = 'flex flex-col items-center justify-center h-screen text-center bg-gray-50 overflow-hidden';

const mainSubtitle = document.createElement('a');
mainSubtitle.href = '#';
mainSubtitle.textContent = 'COLLECT FORM SUBMISSIONS';
mainSubtitle.className = ' text-blue-500 tracking-[2.56px] font-inter';
main.appendChild(mainSubtitle);

const h1 = document.createElement('h1');
h1.className = 'text-[54px] font-normal leading-[72px] tracking-[2.56px] text-left font-inter mt-2';
h1.textContent = 'Get emails and messages from your HTML form';
main.appendChild(h1);

const p = document.createElement('p');
p.className = 'mt-4 text-lg text-gray-600 max-w-2xl';
p.textContent = 'Code your own HTML form and style it, then point your form to formcarry to get email notifications, upload files, block spam and integrate with other apps.';
main.appendChild(p);

const btn = document.createElement('button');
btn.className = 'mt-6 bg-black text-white py-3 px-8 rounded-full hover:bg-gray-800';
btn.textContent = 'Get Started';
main.appendChild(btn);

// Footer section
let footer = document.querySelector('footer');
footer.className = 'max-w-[1100px] h-[72px] mx-auto rounded-[30px] flex justify-around items-center p-6 bg-white';

let leftFooter = document.createElement('div');
leftFooter.className = 'text-gray-600';
leftFooter.textContent = 'formcarry. all rights reserved';
footer.appendChild(leftFooter);

let centerFooter = document.createElement('div');
centerFooter.className = 'space-x-6 text-gray-600';
footer.appendChild(centerFooter);

['Terms of Service', 'Privacy Policy'].forEach(text => {
    let a = document.createElement('a');
    a.href = '#';
    a.textContent = text;
    centerFooter.appendChild(a);
});

let rightFooter = document.createElement('div');
rightFooter.className = 'flex justify-between gap-[24px]';
footer.appendChild(rightFooter);

const twitterLink = document.createElement('a');
twitterLink.href = 'https://twitter.com';
twitterLink.target = '_blank';
const twitterIcon = document.createElement('img');
twitterIcon.src = 'img/twitter.svg'; 
twitterIcon.alt = 'Twitter icon';
twitterIcon.className = 'w-8 h-8'; 
twitterLink.appendChild(twitterIcon);
rightFooter.appendChild(twitterLink);

const facebookLink = document.createElement('a');
facebookLink.href = 'https://facebook.com';
facebookLink.target = '_blank';
const facebookIcon = document.createElement('img');
facebookIcon.src = 'img/facebook.svg'; 
facebookIcon.alt = 'Facebook icon';
facebookIcon.className = 'w-8 h-8'; 
facebookLink.appendChild(facebookIcon);
rightFooter.appendChild(facebookLink);

const githubLink = document.createElement('a');
githubLink.href = 'https://github.com';
githubLink.target = '_blank';
const githubIcon = document.createElement('img');
githubIcon.src = 'img/github.svg'; 
githubIcon.alt = 'GitHub icon';
githubIcon.className = 'w-8 h-8'; 
githubLink.appendChild(githubIcon);
rightFooter.appendChild(githubLink);


