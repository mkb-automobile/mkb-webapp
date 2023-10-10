"use client";
import { CustomButton, Hero } from "@/src/components";
import { sectionHome } from "@/src/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
      <section className="flex  flex-col items-center w-full">
        <div>
          <h1>Recommandation de nos clients</h1>
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
      </section>
      <section className="flex" style={styles.section}>
        <div className="flex flex-around w-full">
          <div
            className="flex md:flex-col"
            style={{
              maxWidth: "1350px",
              display: "flex",
              marginRight: " auto",
              marginLeft: "auto",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "relative",
                minHeight: "1px",
                display: "flex",
              }}
            >
              <div>
                <h2>
                  Ne ratez pas
                  <br />
                  <span style={{ color: "#ff9f1c" }}>une bonne occasion</span>
                </h2>
              </div>
            </div>
            <div>
              <div>
                La meilleure façon d’acheter votre voiture à proximité de chez
                vous et cela partout en France{" "}
              </div>
            </div>
            <div>
              <div>
                <div>
                  <a href="https://mkbautomobile.com/mkb-voitures-occasions/">
                    <span>
                      <span>Trouvez votre voiture</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center">
              <Image src="/citadine.webp" width={429} height={200} alt="" />
              <h2>Citadine</h2>
            </div>
            <div
              className="flex flex-col justify-center items-center"
              style={styles.cardsImag}
            >
              <Image
                src="/berline.webp"
                width={429}
                height={200}
                alt=""
                style={styles.cardsImag}
              />
              <h2 style={styles.cartTitle}>Berline</h2>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center">
              <Image src="/suv.webp" width={429} height={200} alt="" />
              <h2>SUV / 4x4</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/leo-OnHZTmU7WKQ-unsplash.jpg"
                width={429}
                height={200}
                alt="truk"
              />

              <span>Utilitaire</span>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div>
          <h1>Beneficier d'un accompagnement adaté à vos besoin</h1>
        </div>
        <div>Img</div>
      </div>
      <div>card information</div>
    </main>
  );
}

const styles = {
  section: {
    backgroundColor: "#fff7f0",
    transition:
      "background .3s , border .3s , border-radius .3s , box-shadow .3s",
    padding: "2% 0% 2% 0%",
  },
  cardsImag: {
    borderRadius: "30px 30px 0 0 ",
  },
  cartTitle: {
    marginBottom: "4rem",
    color: "black",
    padding: "35px",
    width: "100%",
    backgroundColor: "white",
    borderRadius: "0 0 30px 30px",
  },
};
