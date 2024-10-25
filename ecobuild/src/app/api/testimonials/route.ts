import { ITestimonial } from "@/types/Testimonial";

export async function GET(_request: Request): Promise<Response> {
  const testimonials: ITestimonial[] = [
    {
      quote:
        "EcoBuild Solutions transformed our office space into an energy-efficient haven.",
      client: "NextGen Technologies",
      year: 2019,
    },
    {
      quote:
        "Thanks to EcoBuild, the renovation of our rental suites significantly reduced our energy bills.",
      client: "Pine Valley Properties",
      year: 2020,
    },
    {
      quote:
        "Their expertise in sustainable construction made our project a breeze!",
      client: "Smith & Sons Construction",
      year: 2021,
    },
    {
      quote:
        "The solar panel installation was seamless and has saved us a fortune.",
      client: "Clearview Energy Corp.",
      year: 2022,
    },
    {
      quote:
        "We are proud to partner with EcoBuild Solutions on our green initiatives.",
      client: "Riverside City Council",
      year: 2023,
    },
    {
      quote:
        "Their energy audits revealed opportunities we never knew existed!",
      client: "Greenfield Designs",
      year: 2018,
    },
    {
      quote:
        "The team at EcoBuild Solutions exceeded our expectations at every turn.",
      client: "Prime Properties LLC",
      year: 2022,
    },
    {
      quote:
        "A wonderful experience working with a team that truly cares about sustainability.",
      client: "Harborview Holdings",
      year: 2021,
    },
  ];

  return Response.json(testimonials);
}
