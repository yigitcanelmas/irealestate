import PropertyDetailPage from "@/components/ui/PropertyDetailPage";

export default function SalePropertyPage({ params }: { params: { slug: string } }) {
  return <PropertyDetailPage slug={params.slug} type="sale" />;
}
