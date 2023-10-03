'use client';

import { useRouter } from 'next/navigation';

export default function Paging(props) {
  const router = useRouter();
  const currentPage = Number(props.currentPage);
  const data = props.data;
  const params = props.params;
  return (
    <div className="mt-4 flex justify-between items-center">
      <button
        className={`px-4 py-2 rounded bg-white text-[#76c6cd] ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={currentPage === 0}
        onClick={()=>{
          router.push(`/personal/${params.address}?page=${currentPage - 1}`);
        }}
      >
        Previous
      </button>
      <button
        className={`px-4 py-2 rounded bg-white text-[#76c6cd] ${data.length < 100 ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={data.length < 100}
        onClick={() => {
          router.push(`/personal/${params.address}?page=${currentPage + 1}`);
        }}
      >
        Next
      </button>
    </div>
  )
}