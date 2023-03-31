import style from "./FAQ.module.css";
import FAQItem from "./FAQItem";

const FAQList = [
  {
    title: "Jak opłacać abonament FilmInc",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis dignissim sem ac euismod. Integer at vestibulum ligula, tempus imperdiet ante. Aliquam mattis convallis magna eget tempus. Aliquam vestibulum, odio at pellentesque pretium, tellus ligula egestas velit, a dapibus est orci vel lacus. Sed nec augue dui. Nunc ullamcorper, mauris at condimentum imperdiet, risus ex feugiat sem, sed consectetur sem libero non nibh. Nunc ut neque mollis, euismod ex et, faucibus elit. Pellentesque maximus, lectus id tincidunt convallis, tortor nisl cursus eros, ut lacinia lectus est quis est. Aenean placerat, odio eu consectetur efficitur, odio ligula suscipit ligula, ut bibendum urna nibh id augue. Integer et ligula et arcu venenatis vulputate vitae at enim. Ut eu pellentesque nunc. Proin quis dolor id erat aliquet bibendum ut vel metus. Suspendisse imperdiet aliquam urna ac aliquam. Ut porta, nisi eu euismod facilisis, eros leo faucibus ante, fringilla fringilla nulla ex vitae massa.",
  },
  {
    title: "Rozliczenia i opłaty",
    desc: "Praesent mattis, magna vel sodales hendrerit, augue tortor maximus dui, quis ullamcorper tortor nulla et urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque ut eleifend lorem. Vivamus elementum tincidunt massa sed volutpat. Aenean non dui nec lectus mattis dictum. Suspendisse et dolor blandit, blandit enim eget, accumsan orci. Nulla vestibulum consequat viverra. Integer non dapibus odio. Integer quis vestibulum tortor. Donec tincidunt,",
  },
  {
    title: "Jak korzystać z serwisu FilmInc na telewizorze",
    desc: "Etiam posuere eleifend volutpat. Aliquam eu nisi vitae augue mollis auctor sed et dui. Morbi convallis neque id mauris egestas tempus. Suspendisse condimentum, est eu elementum iaculis, lectus massa feugiat orci, sed luctus tortor felis id felis. Morbi nec orci sed nibh varius pharetra quis eget nibh. Duis id sem a nunc tincidunt egestas ut id enim. Phasellus dapibus libero lorem, in blandit massa tempor sit amet. Nam id leo nulla.",
  },
  {
    title: "Dostałem e-mail informujący o nowym logowaniu na moje konto",
    desc: "Fusce eu maximus lorem. In ut odio neque. Aenean lacinia sapien urna, vitae imperdiet lectus convallis eu. Nulla ut diam dictum, placerat risus quis, auctor lorem. Donec imperdiet eleifend mi sollicitudin rutrum. Duis sodales eu sem nec elementum. Proin tristique velit diam, eu pharetra ex aliquam placerat. Fusce lectus risus, rhoncus in magna vitae, iaculis convallis justo. Quisque sagittis in ante vel porta. Fusce feugiat tincidunt feugiat. Aliquam sit amet ornare velit, vestibulum mattis diam. Cras malesuada porta varius. Donec sollicitudin, nulla eu ullamcorper posuere, diam lectus tincidunt tellus, sit amet vulputate augue augue et quam.",
  },
  {
    title: "Jak zmienić plan",
    desc: "Phasellus mattis faucibus mauris quis maximus. Integer consectetur nisi eu lectus posuere dapibus. Ut hendrerit rutrum purus, eget gravida mauris facilisis id. Praesent non nulla quis nisi posuere pretium. Duis diam diam, finibus non molestie id, scelerisque eget purus. Phasellus tempor sed nunc vel rhoncus. Aenean dictum efficitur diam, ac dignissim velit imperdiet a. Etiam rutrum turpis vel enim tempor facilisis.",
  },
  {
    title: "Jak zmienić hasło w serwisie ",
    desc: "Etiam posuere eleifend volutpat. Aliquam eu nisi vitae augue mollis auctor sed et dui. Morbi convallis neque id mauris egestas tempus. Suspendisse condimentum, est eu elementum iaculis, lectus massa feugiat orci, sed luctus tortor felis id felis. Morbi nec orci sed nibh varius pharetra quis eget nibh. Duis id sem a nunc tincidunt egestas ut id enim. Phasellus dapibus libero lorem, in blandit massa tempor sit amet. Nam id leo nulla. Suspendisse pulvinar elit at tincidunt rutrum. Vestibulum id euismod ligula. Donec at fermentum quam. Vestibulum condimentum urna non rutrum vulputate. In pretium justo nec dapibus sollicitudin. Praesent ac enim molestie, mattis massa a, placerat lorem. Donec ut aliquet justo.",
  },
  {
    title: "Jak zmienić e-mail w serwisie",
    desc: "Phasellus mattis faucibus mauris quis maximus. Integer consectetur nisi eu lectus posuere dapibus. Ut hendrerit rutrum purus, eget gravida mauris facilisis id. Praesent non nulla quis nisi posuere pretium. Duis diam diam, finibus non molestie id, scelerisque eget purus. Phasellus tempor sed nunc vel rhoncus. Aenean dictum efficitur diam, ac dignissim velit imperdiet a. Etiam rutrum turpis vel enim tempor facilisis.",
  },
  {
    title: "FilmInc prosi mnie o rejestrację, gdy próbuję się zalogować",
    desc: "Etiam posuere eleifend volutpat. Aliquam eu nisi vitae augue mollis auctor sed et dui. Morbi convallis neque id mauris egestas tempus. Suspendisse condimentum, est eu elementum iaculis, lectus massa feugiat orci, sed luctus tortor felis id felis. Morbi nec orci sed nibh varius pharetra quis eget nibh. Duis id sem a nunc tincidunt egestas ut id enim. Phasellus dapibus libero lorem, in blandit massa tempor sit amet. Nam id leo nulla. Suspendisse pulvinar elit at tincidunt rutrum. Vestibulum id euismod ligula. Donec at fermentum quam. Vestibulum condimentum urna non rutrum vulputate. In pretium justo nec dapibus sollicitudin. Praesent ac enim molestie, mattis massa a, placerat lorem. Donec ut aliquet justo.",
  },
];

const FAQ = () => {
  return (
    <div className={style.container}>
      <div className={style.FAQBox}>
        <h1>FAQ</h1>
        <p>
          Tu znajdziesz informacje o naszej stronie, jak działa oraz odpowiedzi
          na najważniejsze pytania. Nie możesz znaleźć odpowiedzi?. Skontaktuj
          się z nami.
        </p>
      </div>
      <div className={style.contentBox}>
        {FAQList.map((item) => (
          <FAQItem title={item.title} text={item.desc} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
