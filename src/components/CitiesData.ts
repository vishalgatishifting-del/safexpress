export type City = {
  slug: string;
  city: string;
  img: string;
};

const images = import.meta.glob(
  "../assets/CityPages/*.webp",
  { eager: true }
);

const makeSlug = (name: string) =>
  name.toLowerCase();

export const cities: City[] =
  Object.entries(images).map(
    ([path, module]: any) => {

      const filename =
        path.split("/").pop()
        ?.replace(".webp", "") || "";

        console.log(makeSlug("https://safeshiftingpackers.com/city/"+filename))

      return {
        slug: makeSlug(filename),
        city: filename,
        img: module.default
      };
});