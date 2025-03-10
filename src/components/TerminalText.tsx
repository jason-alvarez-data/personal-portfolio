export default function TerminalText({ command, output }: { command: string; output?: React.ReactNode }) {
    return (
        <div className="font-mono mb-6">
            <div className="flex items-center text-amber-400 mb-2">
                <span className="mr-2">$</span>
                <span>{command}</span>
            </div>
            {output && <div className="pl-4 text-gray-200">{output}</div>}
        </div>
    );
}