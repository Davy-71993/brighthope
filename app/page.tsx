import FlyIn from "@/components/animations/FlyIn";
import ContactForm from "@/components/layout/ContactForm";
import Container from "@/components/layout/Container";
import { gallary } from "@/components/ui/app";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full min-h-screen relative" id="">
        <div className="w-full min-h-screen text-slate-100 absolute top-0 left-0 bg-gradient-to-r from-indigo-500/70 via-purple-500/70 to-pink-500/80 flex justity-center pt-10 sm:pt-20">
          <div className="w-full h-full transition-all duration-500 max-w-3xl mx-auto text-center py-10">
            <FlyIn from={"top"}>
              <h1 className="text-2xl sm:text-4xl font-[500]">Welcome to</h1>
              <h1 className="text-4xl sm:text-6xl font-bold">
                Bright Hope Orphanage School.
              </h1>
              <h2 className="text-2xl sm:text-4xl font-[500]">
                at a village of Lumino
              </h2>
              <p className="text-xl sm:text-2xl mt-10">
                In JESUS CHRIST we have hope...
              </p>
            </FlyIn>
            <FlyIn from={"bottom"}>
              <div className="flex flex-col sm:flex-row justify-around items-center gap-5 w-full mx-w-xl px-5 mt-10">
                <FlyIn from={"left"} className="w-full max-w-60 delay-700">
                  <Link
                    href="/#about-us"
                    className="text-gray-100 shadow-lg transition-colors sm:text-xl block w-full font-bold rounded-md text-center p-2 bg-gradient-to-bl from-gray-50/80 hover:from-gray-50 via-emerald-400/80 hover:via-emerald-400 to-cyan-900/80 hover:to-cyan-900"
                  >
                    Learn More
                  </Link>
                </FlyIn>
                <FlyIn from={"right"} className="w-full max-w-60 delay-1000">
                  <Link
                    href="/#sponsorship"
                    className="text-gray-100 shadow-lg w-full sm:text-xl transition-colors block font-bold rounded-md text-center p-2 bg-gradient-to-bl hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500"
                  >
                    Sponsor a Child
                  </Link>
                </FlyIn>
              </div>
            </FlyIn>
          </div>
        </div>
        <Image
          src={"/bg/bg-1.jpg"}
          alt="bg-1"
          height={1000}
          width={1000}
          className="w-full h-full object-cover absolute top-0 left-0 -z-10"
        />
      </div>
      <div id="about-us" className="pt-20">
        <div className="w-full min-h-[60vh] sm:pt-10">
          <div className="w-full sm:w-fit sm:flex sm:space-x-10 justify-around items-center max-w-[75rem] mx-auto h-full p-5 sm:p-10">
            <div className="text-center sm:text-right w-full sm:w-1/2 p-5">
              <h2 className="text-5xl text-slate-800">Who are we,</h2>
              <p className="text-2xl font-thin mb-10">
                We are a {"children's"} ministry of Lumino Town Baptist Church
                in a village of Lumino, Busia, Uganda
              </p>
            </div>
            <div className="w-full sm:w-1/2  bg-cover h-[20rem] rounded-lg">
              <Image
                src={"/bg/bg-2.png"}
                alt="bg-2"
                height={1000}
                width={1000}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="w-full min-h-[60vh]">
          <div className="w-full sm:w-fit sm:flex sm:space-x-10 justify-around items-center max-w-[75rem] mx-auto h-full p-5 sm:p-10">
            <div className="text-center sm:order-2 sm:text-left w-full sm:w-1/2 p-5">
              <h2 className="text-5xl text-slate-800">What we do.</h2>
              <p className="text-2xl font-thin mb-10">
                We are working to provide Food, Health, Education, Spiritual and
                Community Development to the disadvantaged children in this poor
                community.
              </p>
              <Link
                href={"/about"}
                className="px-4 py-2 text-2xl hover:grayscale rounded-md text-gray-100 bg-gradient-to-br from-blue-300 via-purple-500 to-blue-600"
              >
                Find out more
              </Link>
            </div>
            <div className="w-full sm:w-1/2 h-[20rem] rounded-lg">
              <Image
                src={"/bg/bg-3.jpg"}
                alt="bg-3"
                height={1000}
                width={1000}
                className="w-full object-cover h-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="w-full min-h-[60vh]">
          <div className="w-full sm:w-fit sm:flex sm:space-x-10 justify-around items-center max-w-[75rem] mx-auto h-full p-5 sm:p-10">
            <div className="text-center sm:text-right w-full sm:w-1/2 p-5">
              <h2 className="text-5xl text-slate-800">What drives us,</h2>
              <p className="text-2xl font-thin mb-10">
                One out of every seven children in Uganda is an Orphan yet 60%
                of {"Uganda's"} poppulation are minors.
              </p>
            </div>
            <div className="w-full sm:w-1/2  bg-cover h-[20rem] rounded-lg">
              <Image
                src={"/bg/bg-4.jpg"}
                alt="bg-4"
                height={1000}
                width={1000}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="bg-cyan-800 w-full py-10">
          <Container>
            <div className="py-10">
              <h1 className="text-3xl text-slate-100 mb-5">Our Background</h1>
              <p className="text-xl text-slate-100 font-thin mb-10">
                Bright Hope Orphange is a ministry of Lumino Town Baptist Church
                with the view to minister to orphans and vulnerable children in
                the community that was founded back then in 2012 by Pr. Hillary
                Wafula Wangira in Busia, Uganda, a country in the East of
                Africa.
              </p>
              <h1 className="text-3xl text-slate-100 mb-5">
                PROBLEM ANALYSIS AND RESPONSE:
              </h1>
              <p className="text-2xl text-slate-100 mb-10">
                This community is where the poorest of the poor are and neediest
                of the needy children. This comes as result of low income and
                the HIV/Aids scourge and other killer diseases that has
                increased poverty, orphans and vulnerability of the children.
                There are children who completely cannot afford school demands
                such as scholastic materials, school uniforms, school fees, food
                and etc. Many of them live with grandparents who are elderly and
                weak. This has made children highly vulnerable that has
                attracted the {"Church's"} concern to respond with {"Christ's"}{" "}
                love and care resulting in church members to house and care for
                some of such. The same has caused the Church to start the school
                and the Care Centre at church. We are doing everything we can
                and using the available resources we have. We realized the need
                was too much, and in 2012 we started the Bright Hope Orphanage
                School. Right now we have enrolled 450 children of which 130 are
                orphans ranging from three to fifteen years old. Some of these
                children have to walk a long distance to come to church and
                school from the homes they live.
              </p>
              <h1 className="text-3xl text-slate-100 mb-5">Involvement:</h1>
              <p className="text-2xl text-slate-100 mb-10">
                We believe Education, Health, Food, Spiritual and Community
                Development are inter-related fields, and addressing them,
                results in sustainable and impactful community. We work for the
                uplifting of the poor and destitute by helping them to achieve
                social-economic independence, self-sustainability, proper
                beliefs and health to better their own lot. We do everything
                from providing educational, spiritual and health services to the
                needy, marginalized children, making low literate youth
                employable and empowering the entire community for development.
              </p>
              <h1 className="text-3xl text-slate-100 mb-5">Our Mission</h1>
              <p className="text-xl text-slate-100 font-thin mb-10">
                To bring a bright hope holistically to the hopeless children in{" "}
                {"Jesus'"} name.
              </p>
              <h1 className="text-3xl text-slate-100 mb-5">Our Motto</h1>
              <p className="text-xl text-slate-100 font-thin mb-10">
                In Christ Jesus we have hope.
              </p>
            </div>
          </Container>
        </div>
      </div>
      <div id="gallary" className="">
        <Container className="pt-10">
          <h1 className="text-3xl text-slate-100 font-[700] mt-10 p-3 bg-blue-700/90 w-fit rounded-xl">
            Meet Our Gallary.
          </h1>
          <div className="grid lg:grid-cols-2 py-10 gap-5">
            {gallary.map((g, i) => (
              <div className="w-full relative" key={i}>
                <Image
                  src={g.image}
                  alt={g.title}
                  height={1000}
                  width={1000}
                  className="w-full h-full object-cover rounded-lg z-0"
                />
                <div className="w-full group h-full absolute top-0 left-0 bg-transparent group flex justify-center items-center">
                  <h1 className="z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 p-5 w-full max-w-[80%] rounded-xl text-slate-100 bg-blue-700/90">
                    {g.description}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div id="sponsorship" className="py-20">
        <Container>
          <h1 className="text-3xl md:text-4xl text-slate-800 font-[700]">
            Sponsorship.
          </h1>
          <div className="w-full py-5 border-b-2 mb-10">
            <p className="text-xl mb-10">
              Bright Hope Orphanage School is funded and supported by the
              devoted members of Lumino Town Baptist Church and Partners from
              the United States. We are very delighted and thankful for your
              coming along to walk with us in this glorious journey. We request
              for your prayerful and financial support towards this noble task.
            </p>
            <p className="text-lg mb-5 font-bold">
              Challanges and prayer concerns as we minister to these children:
            </p>
            <ol className="flex list-none gap-5 flex-wrap">
              {[
                "Need for food",
                "Scholastic materials",
                "Teachers' salary",
                "Furniture (classroom sits)",
                "Safety for children",
                "Class rooms",
                "Source of clean safe water.",
                "Transport facility",
                "HIV Infection and other health challenges",
              ].map((c, i) => (
                <li
                  key={i}
                  className="p-5 text-xl rounded-xl bg-blue-500 text-blue-50"
                >
                  {i + 1}. {c}
                </li>
              ))}
            </ol>
          </div>
          <Link
            href={"/#"}
            className="block w-full max-w-60 px-5 py-3 text-xl font-[400] text-center rounded-lg bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 text-slate-100"
          >
            Start Sponsoring
          </Link>
        </Container>
      </div>
      <div id="contact-us" className="py-10">
        <Container className="bg-sky-800 text-sky-200 p-10 rounded-lg flex flex-col gap-5">
          <h1 className="text-4xl font-[700]">Get in touch with us.</h1>
          <div className="w-full flex gap-5 flex-col sm:flex-row">
            <div className="w-full bg-sky-700 rounded-lg p-10">
              <div className="bg-sky-800 min-h-96 rounded-lg w-full max-w-96 mx-auto">
                <ContactForm />
              </div>
            </div>
            <div className="w-full flex flex-col justify-center">
              <h1 className="text-3xl">Bright Hope Orphanage,</h1>
              <p className="text-lg font-thin">
                Plot 129, Majanji Rd. Lumino Busia Ug,
              </p>
              <p className="text-lg font-thin">P.O.BOX 503,</p>
              <p className="text-lg font-thin">Busia (U).</p>
              <h1 className="text-2xl mt-10">
                Email: <span className="font-bold">hillyww@gmail.com</span>
              </h1>
              <h1 className="text-2xl">
                Tell: <span className="font-bold">+256772325299</span>
              </h1>
              <div className="mt-10 flex gap-5 flex-wrap">
                <FaFacebook
                  size={30}
                  className="hover:text-sky-100 transition-all duration-300 hover:scale-125"
                />
                <FaInstagramSquare
                  size={30}
                  className="hover:text-sky-100 transition-all duration-300 hover:scale-125"
                />
                <FaWhatsappSquare
                  size={30}
                  className="hover:text-sky-100 transition-all duration-300 hover:scale-125"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
