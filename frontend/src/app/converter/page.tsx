import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import {FileAudioIcon, ImageIcon, PanelLeftIcon, VideoIcon} from "lucide-react";

export default function Converter() {
  return (
    <div className="grid md:grid-cols-[260px_1fr] min-h-screen w-full">
      <div className="flex flex-col gap-4 bg-background text-foreground p-4 md:p-6">
        <Button variant="ghost" className="justify-start w-full gap-2 px-4 text-left" asChild>
          <Link href="#" prefetch={false}>
            <PanelLeftIcon className="w-6 h-6" />
            <span className="text-sm font-medium">Converter</span>
          </Link>
        </Button>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="images">
            <AccordionTrigger className="justify-start w-full gap-2 px-4 text-left text-base">
              <ImageIcon className="w-5 h-5 mr-2" />
              Images
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2">
              <div className="grid gap-2">
                <Button variant="ghost" className="justify-start text-left">
                  JPG to PNG
                </Button>
                <Button variant="ghost" className="justify-start text-left">
                  PNG to SVG
                </Button>
                <Button variant="ghost" className="justify-start text-left">
                  TIFF to BMP
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="videos">
            <AccordionTrigger className="justify-start w-full gap-2 px-4 text-left text-base">
              <VideoIcon className="w-5 h-5 mr-2" />
              Videos
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2">
              <div className="grid gap-2">
                <Button variant="ghost" className="justify-start text-left">
                  MP4 to AVI
                </Button>
                <Button variant="ghost" className="justify-start text-left">
                  MOV to MKV
                </Button>
                <Button variant="ghost" className="justify-start text-left">
                  FLV to WebM
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="audio">
            <AccordionTrigger className="justify-start w-full gap-2 px-4 text-left text-base">
              <FileAudioIcon className="w-5 h-5 mr-2" />
              Audio
            </AccordionTrigger>
            <AccordionContent className="px-4 py-2">
              <div className="grid gap-2">
                <Button variant="ghost" className="justify-start text-left">
                  MP3 to WAV
                </Button>
                <Button variant="ghost" className="justify-start text-left">
                  OGG to FLAC
                </Button>
                <Button variant="ghost" className="justify-start text-left">
                  AAC to MP3
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex flex-col items-center justify-center p-4 md:p-6">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Convert your files</h1>
          <p className="text-muted-foreground">Select a file format to start converting.</p>
        </div>
      </div>
    </div>
  )
}