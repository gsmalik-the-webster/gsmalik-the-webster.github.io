const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const navLink = document.querySelectorAll('.nav__link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  header.classList.toggle('active');
});

navLink.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    header.classList.toggle('active');
  });
});

const team = [
  {
    image: 'images/team1.jpg',
    name: 'Muhammad Ali',
    education: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    job: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  },
  {
    image: 'images/team2.jpg',
    name: 'Albert John',
    education: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    job: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  },
  {
    image: 'images/team3.jpg',
    name: 'Coven Ganesh',
    education: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    job: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  },
  {
    image: 'images/team4.jpg',
    name: 'Abdul Aziz',
    education: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    job: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  },
  {
    image: 'images/team5.jpg',
    name: 'Avenglean Tony',
    education: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    job: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  },
  {
    image: 'images/team6.jpg',
    name: 'Adam Josaf',
    education: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    job: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  }];

const startPoint = document.querySelector('.team');

const creatTeam = () => {
  startPoint.insertAdjacentHTML('afterbegin', `            <article class="team-member">
<img class="avatar__img" src="" alt="" />
<div class="member__info">
  <h4 class="member__name"></h4>
  <p class="member__education">
  </p>
  <div class="line-break"></div>
  <p class="member__job text-color">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </p>
</div>
</article>`);
};

for (let i = 5; i >= 0; i -= 1) {
  creatTeam();
  const avatarImg = document.querySelector('.avatar__img');
  const memberName = document.querySelector('.member__name');
  const memberEducation = document.querySelector('.member__education');
  const memberJob = document.querySelector('.member__job');

  avatarImg.setAttribute('src', team[i].image);
  avatarImg.setAttribute('alt', team[i].name);
  memberName.textContent = team[i].name;
  memberEducation.textContent = team[i].education;
  memberJob.textContent = team[i].job;
}
