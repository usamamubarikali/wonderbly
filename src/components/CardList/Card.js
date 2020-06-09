import React from 'react';

function Card() {
  return (
		<div className="w-full md:w-1/2 lg:w-1/3">
			<div className="rounded-md shadow-md m-2">
				<img className="w-full bg-red-100" 
				src="https://images.prismic.io/wonderbly/0fc94ef5-21ec-4d7e-a972-d5bb647157ce_YIFY_rangepage.png?auto=compress,format&rect=0,0,410,410&w=410&h=410);background-size:contain" 
				alt="books for display"/>
				
				<div className="px-3 py-2">	
					<div className="font-bold text-xl mb-2">
						ABC For You
					</div>
					<p className="text-gray-700">Introduce a child to the alphabet, and kickstart their reading journey with the power of personalization. The ABCs will never be boring again!</p>
				</div>
				<div className="p-2 overflow-hidden">
					<p className="float-left px-1 py-1 text-lg font-semibold text-gray-700">Age 0-3</p>
					<p className="float-right px-1 py-1 text-lg font-semibold text-green-500">From $30.00 USD</p>
				</div>
			</div>
		</div>
  );
}

export default Card;