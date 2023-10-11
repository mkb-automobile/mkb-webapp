"use client";
import { CustomButton, Hero } from "@/src/components";
import { sectionHome } from "@/src/constants";
import { url } from "inspector";
import Image from "next/image";
import { useRouter } from "next/navigation";

const supportCards = [
  {
    title: "Comment ça marche",
    btnTitle: "On vous explique tout",
    path: "/howworks",
    backgroundImage: "/MKB-Automobile-service-personnalise-1.webp",
  },
  {
    title: "Financement",
    btnTitle: "Je me renseigne",
    path: "/financing",
    backgroundImage: "/MKB-Automobile-financement.webp",
  },
  {
    title: "Reprise auto",
    text: `Vous souhaitez vendre votre voiture ? Aucun problème - On est là pour vous`,
    btnTitle: "Je demande une estimation",
    path: "/taking",
    backgroundImage: "/MKB-automobile-Trouvez-votre-voiture-600-400.webp",
  },
  {
    title: "Contactez-nous",
    text: "Vous avez des question ? Nous sommes à votre écoute pour échanger sur votre projet automobile",
    btnTitle: "Contactez un conseiller",
    path: "/",
    backgroundImage: "/MKB-automobile-Trouvez-votre-voiture-600-400.webp",
  },
];

export default function Home({}) {
  const router = useRouter();
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="w-full py-10">
        <h2 className="font-semibold text-center text-3xl">
          <span style={{ color: "#ff9f1c" }}>MKB</span> - Un gage de qualité
        </h2>
      </div>
      <section className="flex w-full" style={styles.section}>
        <div className="max-w-[1440px] mx-auto flex justify-between">
          {sectionHome.map((section, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <Image
                src={section.img}
                width={50}
                height={50}
                alt={`${section.title}-logo`}
                className="pb-5"
              />
              <h1 className="text-3xl">{section.title}</h1>
              <p className="text-center text-base">{section.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex  items-center w-full">
        <div className="flex flex-col items-center w-full py-20">
          <div className="font-semibold text-3xl">
            <h2>
              <span style={{ color: "#ff9f1c" }}>Recommandé</span> par nos
              clients - 4,8/5
            </h2>
          </div>
          <div>Intégration de l'api </div>
          <div>
            <CustomButton
              title="Découvrire tous les avis clients"
              containerStyles="bg-primary-orange text-white rounded-full mt-10 w-[20rem]"
              handleClick={() => {
                router.push("/catalog");
              }}
            />
          </div>
        </div>
      </section>
      <section className="flex justify-center" style={styles.section}>
        <div className="flex justify-center items-center gap-3 max-w-screen-xl">
          <div className="relative flex flex-col w-1/3 pr-28">
            <div
              style={{
                position: "relative",
                minHeight: "1px",
                display: "flex",
              }}
            >
              <div className="font-semibold text-3xl">
                <h2>
                  Ne ratez pas
                  <br />
                  <span style={{ color: "#ff9f1c" }}>une bonne occasion</span>
                </h2>
              </div>
            </div>
            <div>
              <p style={styles.occasion}>
                La meilleure façon d’acheter votre voiture à proximité de chez
                vous et cela partout en France
              </p>
            </div>
            <div>
              <div>
                <div className="flex justify-center w-full">
                  <CustomButton
                    title="Trouver votre voiture"
                    containerStyles="bg-primary-orange text-white rounded-full mt-10"
                    handleClick={() => {
                      router.push("/catalog");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="flex flex-col justify-center items-center"
              style={styles.cardsImag}
            >
              <Image
                src="/citadine.webp"
                width={429}
                height={200}
                alt=""
                style={styles.cardsImag}
              />
              <h2 style={styles.cartTitle}>Citadine</h2>
            </div>
            <div
              className="flex flex-col justify-center items-center"
              style={styles.cardsImag}
            >
              <Image
                src="/jon-koop-khYVyHiNZo0-unsplash.jpg"
                width={429}
                height={200}
                alt=""
                style={styles.cardsImag}
              />
              <h2 style={styles.cartTitle}>Berline</h2>
            </div>
          </div>
          <div>
            <div
              className="flex flex-col justify-center items-center"
              style={styles.cardsImag}
            >
              <Image
                src="/suv.webp"
                width={429}
                height={200}
                alt=""
                style={styles.cardsImag}
              />
              <h2 style={styles.cartTitle}>SUV / 4x4</h2>
            </div>
            <div
              className="flex flex-col justify-center items-center"
              style={styles.cardsImag}
            >
              <Image
                src="/leo-OnHZTmU7WKQ-unsplash.jpg"
                width={429}
                height={200}
                alt=""
                style={styles.cardsImag}
              />
              <h2 style={styles.cartTitle}>Utilitaire</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full">
        <div className="flex justify-around items-center w-full py-20">
          <div className="flex justify-center w-3/6">
            <Image
              src="/MKB-automobile-Trouvez-votre-voiture-600-400.webp"
              width={300}
              height={201}
              alt="service-personnsalise"
              className=" rounded-3xl"
            />
          </div>
          <div className="w-3/6">
            <div className="font-semibold text-3xl pb-5">
              Bénéficier d'un accompagnement
              <br />
              adapté à vos besoins{" "}
              <span style={{ color: "#ff9f1c" }}>
                via la recherche personnalisée
              </span>{" "}
            </div>

            <div>
              Nos experts vous accompagnent
              <br />
              tout au long de votre processus d'achat.
            </div>

            <div>
              <CustomButton
                title="En savoir plus"
                containerStyles="bg-primary-orange text-white rounded-full mt-10"
                handleClick={() => {
                  router.push("/catalog");
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full justify-center">
        <div className="grid grid-cols-2 gap-4 py-20 max-md:grid-cols-1  max-sm:p-4">
          {supportCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col  justify-center items-center bg-cover bg-center rounded h-48"
              style={{ backgroundImage: `url(${card.backgroundImage})` }}
            >
              <div className="font-semibold text-center text-3xl ">
                <h2>{card.title}</h2>
              </div>
              <div>
                <p>{card.text}</p>
              </div>
              <div>
                <CustomButton
                  title={card.btnTitle}
                  containerStyles="bg-primary-orange text-white rounded-full mt-5"
                  handleClick={() => {
                    router.push(card.path);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

const styles = {
  section: {
    backgroundColor: "#fff7f0",
    padding: "2% 0% 2% 0%",
  },
  cardsImag: {
    borderRadius: "30px 30px 0 0 ",
  },
  cartTitle: {
    marginBottom: "1rem",
    color: "black",
    padding: "35px",
    width: "100%",
    backgroundColor: "white",
    borderRadius: "0 0 30px 30px",
  },
  occasion: {
    margin: "",
    padding: "",
  },
};
