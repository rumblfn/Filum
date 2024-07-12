import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {
  FileArchiveIcon,
  FileIcon,
  FileImageIcon,
  FileMusicIcon,
  FileQuestionIcon,
  FileXIcon,
  UploadIcon
} from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col min-h-[100dvh]">
        <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
          <div className="container">
            <div className="flex gap-4 items-end">
              <Link href="/" prefetch={false}>
                <h1 className="text-3xl font-bold">Filum</h1>
              </Link>
              <Link href="/converter">
                <h2 className="text-2xl font-bold">Converter</h2>
              </Link>
            </div>
            <p className="text-lg text-primary-foreground/80 mt-2">Easily convert your files to the format you need.</p>
          </div>
        </header>
        <main className="flex-1">
          <section className="py-12 md:py-20">
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl font-bold mb-4">Supported Formats</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                  <FileIcon className="h-8 w-8 mr-2"/>
                  <span>PDF</span>
                </div>
                <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                  <FileImageIcon className="h-8 w-8 mr-2"/>
                  <span>JPG</span>
                </div>
                <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                  <FileIcon className="h-8 w-8 mr-2"/>
                  <span>PNG</span>
                </div>
                <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                  <FileQuestionIcon className="h-8 w-8 mr-2"/>
                  <span>DOC</span>
                </div>
                <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                  <FileXIcon className="h-8 w-8 mr-2"/>
                  <span>XLSX</span>
                </div>
                <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                  <FileMusicIcon className="h-8 w-8 mr-2"/>
                  <span>MP3</span>
                </div>
                <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                  <FileMusicIcon className="h-8 w-8 mr-2"/>
                  <span>MP4</span>
                </div>
                <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                  <FileArchiveIcon className="h-8 w-8 mr-2"/>
                  <span>ZIP</span>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-muted py-12 md:py-20">
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl font-bold mb-4">Convert Your Files</h2>
              <div className="bg-background rounded-lg shadow-lg p-6 md:p-8">
                <div>
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <UploadIcon className="h-12 w-12 text-muted-foreground"/>
                    <p className="text-lg font-medium">
                      Drag and drop your files here or <button className="text-primary underline">browse</button>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Supported formats: PDF, JPG, PNG, DOC, XLSX, MP3, MP4, ZIP
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <Button className="bg-primary text-primary-foreground">Convert</Button>
                </div>
              </div>
            </div>
          </section>
          <section className="py-12 md:py-20">
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl font-bold mb-4">Recent Conversions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>PDF to JPG</CardTitle>
                    <CardDescription>Converted on 2023-05-12</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center h-32 bg-muted rounded-md">
                      <FileIcon className="h-12 w-12 text-muted-foreground"/>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm">
                      Download
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>XLSX to CSV</CardTitle>
                    <CardDescription>Converted on 2023-05-10</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center h-32 bg-muted rounded-md">
                      <FileXIcon className="h-12 w-12 text-muted-foreground"/>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm">
                      Download
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>DOC to PDF</CardTitle>
                    <CardDescription>Converted on 2023-05-08</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center h-32 bg-muted rounded-md">
                      <FileQuestionIcon className="h-12 w-12 text-muted-foreground"/>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm">
                      Download
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-muted text-muted-foreground py-6 px-4 md:px-6">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
            <p>&copy; 2024 Filum. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:underline" prefetch={false}>
                Privacy Policy
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Terms of Use
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Contact Us
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
