import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import Breadcrumbs from '../../breadcrumbs';
import Form from '../../create-form';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  // Fetch data in parallel
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/ui/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/ui/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
