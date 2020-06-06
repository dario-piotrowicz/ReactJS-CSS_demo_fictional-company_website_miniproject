import blogImg1 from '../../assets/images/blog/blog1.jpg';
import blogImg2 from '../../assets/images/blog/blog2.jpg';
import blogImg3 from '../../assets/images/blog/blog3.jpg';
import peopleImg from '../../assets/images/home/people.jpg';

const blogPostsData = [
  {
    postId: 'post1',
    imageSrc: blogImg1,
    title: 'This is a great website',
    author: 'John',
    date: new Date(2020, 1, 20),
    paragraphs: [
      `I just wanted to congratulate our devs team to make this
    gorgeous website, I have even heard that it was made using react without
    CRA and that babel and webpack were manually set, that I think is something
    pretty cool.`,
      `Not using CRA was a nice challenge and definitely paid off, I have been told by
    the devs that they found out that it is not that difficult and makes for a cleaner
    project. You may not get all the fancy configurations you get by using CRA but you
    can actually achieve the same results anyways, and you can add configurations as you
    go along and need them.`,
      `Another interesting aspect that I was told is indeed that if you try taking a CRA
    project and eject it, the amount of configurations and settings is enormous, dealing
    with that can easily be much much much harder than starting right off the bat with your
    own webpack/babel setup.`,
    ],
    url: '/blog/post1',
  },
  {
    postId: 'post2',
    imageSrc: blogImg2,
    title: 'My Blog Post',
    author: 'She',
    date: new Date(2020, 1, 23),
    paragraphs: [
      `I am not sure what to say, I was just tasked to make a blog post but
    I was not even told what is was supposed to be about. Anyway I hope you got
    that this company does not actually exist.`,
      `Just to increase the size of the post let's put here a couple of
      LoremIpsums... hopefully noone will even notice them...`,
      `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore quibusdam
       earum beatae eos odit! Doloremque possimus asperiores at perferendis mollitia.`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus
       commodi aliquid cum, laboriosam officiis consectetur, veniam distinctio
        repudiandae doloribus ullam mollitia explicabo dignissimos nesciunt iure dolore
        saepe quaerat. Itaque repudiandae totam ab soluta hic incidunt, sunt voluptatem
        repellat consectetur animi laboriosam enim velit fugiat delectus sequi possimus,
        neque tenetur.`,
      `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quas in dicta
        pariatur amet. Nisi?`,
    ],
    url: '/blog/post2',
  },
  {
    postId: 'post3',
    imageSrc: blogImg3,
    title: 'I love Coffee!',
    author: 'Coffee Guy',
    date: new Date(2020, 2, 24),
    paragraphs: [
      `Did I tell you that I love coffee? I am starting an initialive to
    raise awareness of the fact that I do love coffee, coffee is great and gives you
    energy! Who doesn't like coffee! Am I right?`,
      `Coffe can be a bit bitter but it is so good and it gives you energy! it is really
    a wonderful drink. Have you tried dipping chocolate buiscuits inside of it? those
    are so yummy!`,
    ],
    url: '/blog/post3',
  },
  {
    postId: 'post_about',
    imageSrc: peopleImg,
    title: 'FictionalFinances',
    author: 'John',
    date: new Date(2020, 0, 1),
    paragraphs: [
      `We are really pleased to present to you our fantastic and totally real company.
      Our service is top notch and totally real, we do and get financial stuff done,
      whatever that means.`,
      `But we are so very pleased that you decided to visit our website and consider us
      for any future services.`,
      `If in need of something visit our home page and request that something via the
      contact form you can find at the bottom of the page.`,
      `In our footer you can even find a github icon linking to our github repository,
      in which you can find the source code for this awesome website, go and check that out!`,
      `All in all I on behalf of this (again) totally existing company welcome you and
      thank you for your interest, I hope you will enjoy our fabulous website and consider
      us for future financial something something.`,
    ],
    url: '/blog/post_about',
  },
];

export default blogPostsData;
