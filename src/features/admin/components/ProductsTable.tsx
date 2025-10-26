import { useState } from "react";
import { Search, Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// TypeScript interface for product data
interface Product {
  img: string;
  name: string;
  email: string;
  job: string;
  org: string;
  online: boolean;
  date: string;
}

// Mock data - In production, this would come from an API
const TABLE_ROWS: Product[] = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: false,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    online: false,
    date: "19/09/17",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: true,
    date: "24/12/08",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    online: false,
    date: "04/10/21",
  },
];

export function ProductsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter products based on search and tab
  const filteredProducts = TABLE_ROWS.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "monitored" && product.online) ||
      (activeTab === "unmonitored" && !product.online);
    return matchesSearch && matchesTab;
  });

  const handleEdit = (product: Product) => {
    console.log("Edit product:", product);
    // TODO: Implement edit functionality
  };

  const handleDelete = (product: Product) => {
    console.log("Delete product:", product);
    // TODO: Implement delete functionality
  };

  return (
    <Card className="w-full max-w-6xl">
      <CardHeader>
        <div className="flex w-full flex-col gap-2 items-center justify-center">
          <CardTitle className="text-2xl font-bold">قائمة المنتجات</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            اطلع على المعلومات عن جميع المنتجات
          </CardDescription>
        </div>

        <div className="flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between mt-6">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-5" />
            <Input
              type="search"
              placeholder="ابحث عن منتج..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full md:w-auto"
          >
            <TabsList dir="rtl" className="shadow-md">
              <TabsTrigger value="all" className="text-md font-light">
                جميع المنتجات
              </TabsTrigger>
              <TabsTrigger value="monitored" className="text-md font-light">
                متاح
              </TabsTrigger>
              <TabsTrigger value="unmonitored" className="text-md font-light">
                غير متاح
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>

      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-right font-bold text-lg">
                  المنتج
                </TableHead>
                <TableHead className="text-right font-bold text-lg">
                  الحالة
                </TableHead>
                <TableHead className="text-right font-bold text-lg">
                  الاجراءات
                </TableHead>
                <TableHead className="text-right font-bold text-lg">
                  الفئة
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center py-8 text-muted-foreground"
                  >
                    لا توجد منتجات متطابقة مع البحث
                  </TableCell>
                </TableRow>
              ) : (
                filteredProducts.map((row) => (
                  <TableRow key={row.email}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={row.img} alt={row.name} />
                          <AvatarFallback>
                            {row.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">
                            {row.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {row.email}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={row.online ? "default" : "secondary"}
                        className={
                          row.online ? "bg-green-500 hover:bg-green-600" : ""
                        }
                      >
                        {row.online ? "متاح" : "غير متاح"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right flex items-center gap-2">
                      <Button
                        variant="secondary"
                        size="icon"
                        className="flex items-center gap-2 hover:bg-gray-200"
                        onClick={() => handleEdit(row)}
                        aria-label="تعديل المنتج"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="flex items-center gap-2 text-white bg-red-500 hover:bg-red-600 hover:text-white"
                        onClick={() => handleDelete(row)}
                        aria-label="حذف المنتج"
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{row.job}</span>
                        <span className="text-sm text-muted-foreground">
                          {row.org}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          عرض {filteredProducts.length} من أصل {TABLE_ROWS.length} منتج
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            السابق
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={filteredProducts.length === 0}
          >
            التالي
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
