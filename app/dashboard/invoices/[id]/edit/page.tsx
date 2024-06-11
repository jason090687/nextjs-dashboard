
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../breadcrumbs';
import Form from '../../edit-form';

export const metadata: Metadata = {
  title: 'Edit',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }
    
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
}