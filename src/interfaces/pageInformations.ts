export interface PageInformationProps {
        head: {
          pageTitle: string,
          metaDescription: string,
          imageOpenGraph: string,
          headScripts: string,
        },
        body: { bodyScripts: string },
        item: {
          id: number,
          titulo: string,
          descricao: string,
        }
}