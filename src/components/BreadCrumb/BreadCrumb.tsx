import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
export const BreadCrumb = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">about</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
