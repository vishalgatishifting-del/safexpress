
import { useState } from "react";
import { Helmet } from "react-helmet-async";

import "../styles/PhotoGallery.scss";
import "../styles/Common.scss";

type GalleryCategory =
    | "all"
    | "bike"
    | "household"
    | "storage"
    | "car"
    | "wooden";

interface GalleryImage {
    src: string;
    category: Exclude<GalleryCategory, "all">;
}

const categoryLabels: Record<GalleryCategory, string> = {
    all: "All",
    bike: "Bike Shifting",
    household: "House Shifting",
    storage: "Storage",
    car: "Car Shifting",
    wooden: "Wooden Packing",
};

const imageAltText: Record<
    Exclude<GalleryCategory, "all">,
    string
> = {
    bike: "Professional bike shifting and transportation service by Safexpress",
    household: "Household goods packing and home shifting service by Safexpress",
    storage: "Secure warehouse storage service for household goods by Safexpress",
    car: "Professional car shifting and vehicle transportation service by Safexpress",
    wooden: "Wooden packing service for safe goods transportation by Safexpress",
};

const images: GalleryImage[] = [
    { src: "b 54.webp", category: "bike" },
    { src: "b 55.webp", category: "bike" },
    { src: "b 56.webp", category: "bike" },
    { src: "b 57.webp", category: "bike" },
    { src: "b 58.webp", category: "bike" },
    { src: "b 59.webp", category: "bike" },
    { src: "bike 50.webp", category: "bike" },
    { src: "bike 52.webp", category: "bike" },
    { src: "bike1.webp", category: "bike" },
    { src: "bike11.webp", category: "bike" },
    { src: "bike12.webp", category: "bike" },
    { src: "bike13.webp", category: "bike" },
    { src: "bike14.webp", category: "bike" },
    { src: "bike15.webp", category: "bike" },
    { src: "bike16.webp", category: "bike" },
    { src: "bike17.webp", category: "bike" },
    { src: "bike18.webp", category: "bike" },
    { src: "bike19.webp", category: "bike" },
    { src: "bike2.webp", category: "bike" },
    { src: "bike20.webp", category: "bike" },
    { src: "bike21.webp", category: "bike" },
    { src: "bike22.webp", category: "bike" },
    { src: "bike4.webp", category: "bike" },
    { src: "bike40.webp", category: "bike" },
    { src: "bike41.webp", category: "bike" },
    { src: "bike5.webp", category: "bike" },
    { src: "bike6.webp", category: "bike" },
    { src: "bike8.webp", category: "bike" },
    { src: "bke 51.webp", category: "bike" },
    { src: "IMG-20250815-WA0005.webp", category: "bike" },
    { src: "IMG-20250815-WA0006.webp", category: "bike" },
    { src: "IMG-20250815-WA0008.webp", category: "bike" },

    { src: "ahou1.webp", category: "household" },
    { src: "House1.webp", category: "household" },
    { src: "House10.webp", category: "household" },
    { src: "House11.webp", category: "household" },
    { src: "House12.webp", category: "household" },
    { src: "House13.webp", category: "household" },
    { src: "House14.webp", category: "household" },
    { src: "House16.webp", category: "household" },
    { src: "House17.webp", category: "household" },
    { src: "House18.webp", category: "household" },
    { src: "House19.webp", category: "household" },
    { src: "House2.webp", category: "household" },
    { src: "House20.webp", category: "household" },
    { src: "House21.webp", category: "household" },
    { src: "House22.webp", category: "household" },
    { src: "House23.webp", category: "household" },
    { src: "House24.jpeg", category: "household" },
    { src: "House25.webp", category: "household" },
    { src: "House26.webp", category: "household" },
    { src: "House27.webp", category: "household" },
    { src: "house29.webp", category: "household" },
    { src: "House3.webp", category: "household" },
    { src: "house30.webp", category: "household" },
    { src: "house31.webp", category: "household" },
    { src: "house32.webp", category: "household" },
    { src: "house34.webp", category: "household" },
    { src: "House4.webp", category: "household" },
    { src: "House5.webp", category: "household" },
    { src: "House6.webp", category: "household" },
    { src: "House7.webp", category: "household" },
    { src: "House8.webp", category: "household" },
    { src: "House9.webp", category: "household" },
    { src: "other1.webp", category: "household" },
    { src: "other2.webp", category: "household" },
    { src: "other3.webp", category: "household" },
    { src: "other4.webp", category: "household" },

    { src: "wood1.webp", category: "wooden" },
    { src: "wood3.webp", category: "wooden" },
    { src: "wood4.webp", category: "wooden" },
    { src: "wood5.webp", category: "wooden" },
    { src: "wooden 23.webp", category: "wooden" },
    { src: "wooden1.webp", category: "wooden" },
    { src: "wooden10.webp", category: "wooden" },
    { src: "wooden11.webp", category: "wooden" },
    { src: "wooden12.webp", category: "wooden" },
    { src: "wooden13.webp", category: "wooden" },
    { src: "wooden14.webp", category: "wooden" },
    { src: "wooden15.webp", category: "wooden" },
    { src: "wooden16.webp", category: "wooden" },
    { src: "wooden17.webp", category: "wooden" },
    { src: "wooden2.webp", category: "wooden" },
    { src: "wooden20.webp", category: "wooden" },
    { src: "wooden21.webp", category: "wooden" },
    { src: "wooden24.webp", category: "wooden" },
    { src: "wooden25.webp", category: "wooden" },
    { src: "wooden3.webp", category: "wooden" },
    { src: "wooden4.webp", category: "wooden" },
    { src: "wooden5.webp", category: "wooden" },
    { src: "wooden6.webp", category: "wooden" },
    { src: "wooden7.webp", category: "wooden" },
    { src: "wooden8.webp", category: "wooden" },
    { src: "wooden9.webp", category: "wooden" },

    { src: "stor1.webp", category: "storage" },
    { src: "stor2.webp", category: "storage" },
    { src: "stor4.webp", category: "storage" },
    { src: "stor5.webp", category: "storage" },
    { src: "stor6.webp", category: "storage" },
    { src: "stor8.webp", category: "storage" },
    { src: "stor9.webp", category: "storage" },
    { src: "store1.webp", category: "storage" },
    { src: "store2.webp", category: "storage" },
    { src: "store3.webp", category: "storage" },
    { src: "store4.webp", category: "storage" },
    { src: "store5.webp", category: "storage" },

    { src: "10.webp", category: "car" },
    { src: "2.webp", category: "car" },
    { src: "c 3.webp", category: "car" },
    { src: "c 4.webp", category: "car" },
    { src: "c 6.webp", category: "car" },
    { src: "c7.webp", category: "car" },
    { src: "c8.webp", category: "car" },
    { src: "c9.webp", category: "car" },
    { src: "c9_1.webp", category: "car" },
    { src: "car 1.webp", category: "car" },
];

const LazyImage = ({
    src,
    alt,
}: {
    src: string;
    alt: string;
}) => {
    return (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
        />
    );
};

const PhotoGallery = () => {
    const [category, setCategory] =
        useState<GalleryCategory>("all");

    const filteredImages =
        category === "all"
            ? images
            : images.filter(
                  (image) => image.category === category
              );

    return (
        <>
            <Helmet>
                <title>
                    Photo Gallery | Safexpress Relocation Services
                </title>

                <meta
                    name="description"
                    content="Explore the Safexpress photo gallery featuring bike shifting, household relocation, car transportation, warehouse storage, and professional wooden packing services."
                />

                <meta
                    name="keywords"
                    content="Safexpress photo gallery, bike shifting photos, house shifting images, car transportation photos, warehouse storage images, wooden packing services"
                />

                <meta
                    name="robots"
                    content="index, follow"
                />

                <meta
                    property="og:title"
                    content="Photo Gallery | Safexpress Relocation Services"
                />

                <meta
                    property="og:description"
                    content="View photos of Safexpress relocation, vehicle transportation, household shifting, storage, and professional packing services."
                />

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />

                <meta
                    name="twitter:title"
                    content="Safexpress Photo Gallery"
                />

                <meta
                    name="twitter:description"
                    content="Explore photos of professional relocation, packing, transportation, and storage services by Safexpress."
                />
                
                <link rel="canonical" href="https://safeshiftingpackers.com/photo-gallery" />
            </Helmet>

            <main
                id="photo-gallery-sec"
                className="top-element"
            >
                <div className="container">
                    <header className="gallery-header">
                        <h1>
                            Safexpress Relocation Services Photo Gallery
                        </h1>

                        <p>
                            Explore photos of our professional packing,
                            relocation, vehicle transportation, and storage
                            services. Our gallery showcases different stages of
                            household shifting, bike transportation, car
                            shifting, wooden packing, and warehouse storage.
                        </p>
                    </header>

                    <section
                        className="gallery-section"
                        aria-labelledby="gallery-heading"
                    >
                        <h2 id="gallery-heading">
                            Explore Our Moving and Relocation Work
                        </h2>

                        <div
                            className="btns"
                            role="group"
                            aria-label="Filter relocation gallery"
                        >
                            {(
                                Object.keys(
                                    categoryLabels
                                ) as GalleryCategory[]
                            ).map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() =>
                                        setCategory(cat)
                                    }
                                    className={
                                        category === cat
                                            ? "active"
                                            : ""
                                    }
                                    aria-pressed={
                                        category === cat
                                    }
                                >
                                    {categoryLabels[cat]}
                                </button>
                            ))}
                        </div>

                        <div
                            className="content"
                            aria-live="polite"
                        >
                            {filteredImages.map(
                                (image, index) => (
                                    <figure
                                        key={`${image.src}-${index}`}
                                        className="img-bx"
                                    >
                                        <LazyImage
                                            src={
                                                new URL(
                                                    `../assets/photoGallery/${image.src}`,
                                                    import.meta.url
                                                ).href
                                            }
                                            alt={`${imageAltText[image.category]} - ${index + 1}`}
                                        />
                                    </figure>
                                )
                            )}
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default PhotoGallery;
