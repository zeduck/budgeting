import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useCSVReader } from 'react-papaparse';

export default function UploadButton({
  onUpload,
}: {
  onUpload: (results: any) => void;
}) {
  const { CSVReader } = useCSVReader();
  
  return (
    <CSVReader onUploadAccepted={onUpload}>
      {({ getRootProps }: any) => (
        <Button
          size='sm'
          className='w-full lg:w-auto'
          {...getRootProps()}
        >
          <Upload className="size-4 mr-2"/>
          Import
        </Button>
      )}
    </CSVReader>
  )
}