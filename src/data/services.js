export const services = [
  {
    name: 'GST Services',
    path: '/services/gst',
    description:
      'Support with GST compliance, reviews, refunds and advisory.',
    children: [
      { name: 'Review Services', path: '/services/gst/review-services' },
      {
        name: 'Compliance & System Setting Support',
        path: '/services/gst/compliance-and-system-setting-support',
      },
      { name: 'Refund Services', path: '/services/gst/refund-services' },
      { name: 'Advisory & Consultancy', path: '/services/gst/advisory-and-consultancy' },
    ],
  },
  {
    name: 'Income Tax',
    path: '/services/income-tax',
    description:
      'Return filing, tax planning, TDS compliance and notice assistance.',
  },
  {
    name: 'Audit & Assurance',
    path: '/services/audit',
    description:
      'Tax audit, statutory audit, internal audit and certification work.',
  },
  {
    name: 'Accounting & Bookkeeping',
    path: '/services/accounting',
    description:
      'Bookkeeping, reconciliation, financial statements and reports.',
  },
]