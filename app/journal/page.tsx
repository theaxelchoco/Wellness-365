'use client';

import React, { useEffect, useState } from "react";
import { fetchJournalEntries } from "../services/journalService";

type JournalEntry = {
    positiveNotes: string;
    improvementAreas: string;
    dateCreated: string;
};

const JournalPage: React.FC = () => {
    const [journalEntries, setJournalEntries] = useState<Record<string, JournalEntry[]>>({});

    useEffect(() => {
        const getEntries = async () => {
            const entries = await fetchJournalEntries();

            // Sort entries by dateCreated in ascending order
            const sortedEntries = entries.sort((a: JournalEntry, b: JournalEntry) => {
                return new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime();
            });

            // Group sorted entries by month
            const groupedEntries = sortedEntries.reduce((acc: Record<string, JournalEntry[]>, entry: JournalEntry) => {
                const date = new Date(entry.dateCreated);
                const month = date.toLocaleString("default", { month: "long", timeZone: "UTC" }); 

                if (!acc[month]) acc[month] = [];
                acc[month].push(entry);
                return acc;
            }, {});

            setJournalEntries(groupedEntries);
        };

        getEntries();
    }, []);

    return (
        <div className="bg-[#FFFFF5] min-h-screen flex items-center justify-center p-4">
            <div className="bg-[#FFF5D7] p-6 shadow-md rounded-lg w-full max-w-4xl">
                <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
                    Moments of the Year
                </h1>
                {Object.keys(journalEntries).length > 0 ? (
                    Object.entries(journalEntries).map(([month, entries]) => (
                        <div key={month} className="mb-4">
                            <h2 className="text-2xl font-semibold text-gray-700 mb-4">{month}</h2>
                            <ul className="space-y-4">
                                {entries.map((entry, index) => {
                                    const date = new Date(entry.dateCreated).getUTCDate();
                                    return (
                                        <li
                                            key={index}
                                            className="bg-[#FDCD93] p-4 rounded-md shadow-sm"
                                        >
                                            <span className="font-bold text-black">{date}. </span>
                                            <span className="text-black">{entry.positiveNotes}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600 text-center">Loading journal entries...</p>
                )}
            </div>
        </div>
    );
};

export default JournalPage;