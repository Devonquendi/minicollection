import MiniCardGrid from "../../components/MiniCardGrid";
import {getFactions, getFigureGridInfo, getReleaseWaves} from "../../lib/sanityQueries";
import {MiniatureSearchBar} from "../../components/searchBar/MiniatureSearchBar";

export default async function Miniatures({searchParams}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const searchFilter = typeof searchParams.searchFilter === 'string' ? searchParams.searchFilter : undefined;
    const factionFilter = typeof searchParams.factionFilter === 'string' ? searchParams.factionFilter : undefined;
    const releaseWaveFilter = typeof searchParams.releaseWaveFilter === 'string' ? searchParams.releaseWaveFilter : undefined;
    const selectedFigure = typeof searchParams.figure === 'string' ? searchParams.figure : undefined;

    const figures = await getFigureGridInfo();
    const factions = await getFactions();
    const releaseWaves = await getReleaseWaves();

    return (
        <div className="flex flex-col items-center mt-10 space-y-2 md:space-y-5 p-4">
            <MiniatureSearchBar
                searchFilter={searchFilter}
                factionFilter={factionFilter}
                releaseWaveFilter={releaseWaveFilter}
                factions={factions}
                releaseWaves={releaseWaves}
            />
            <div className='flex flex-col'>
                <MiniCardGrid
                    figures={figures}
                    searchFilter={searchFilter || ''}
                    factionFilter={factionFilter || ''}
                    releaseWaveFilter={releaseWaveFilter || ''}
                    factions={factions}
                    releaseWaves={releaseWaves}
                    selectedFigure={selectedFigure}
                />
            </div>
        </div>
    );
}