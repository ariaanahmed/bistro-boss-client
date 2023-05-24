import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
    return (
        <section className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading="Check it out"
                heading="featured item"
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-10 md:px-36 gap-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div>
                    <img className="rounded-md" src={featuredImg} alt="featured-image" />
                </div>
                <div className="text-white">
                    <p className="mb-5">Aug 20, 2023</p>
                    <p className="uppercase font-semibold">where i can get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, autem tempora suscipit voluptatem fuga placeat, dolorum saepe cumque adipisci dolores magnam quis vero odit? Nobis voluptas tenetur perferendis, delectus sunt, aliquid aspernatur labore nisi a perspiciatis quos illo commodi deserunt qui, assumenda officia dolor laboriosam sed. Eveniet vitae asperiores magni!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-5">order now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;