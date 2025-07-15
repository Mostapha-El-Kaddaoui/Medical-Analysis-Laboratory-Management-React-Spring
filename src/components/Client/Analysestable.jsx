import React from 'react';
import '../../style/support.css'

export default function Analysestable() {
  return (
	<div class="relative overflow-x-auto w-11/12 rounded-lg mx-auto pt-20 pb-40">
    <table class="w-full rounded-lg overflow-hidden text-sm text-left rtl:text-right text-gray-500 rounded-lg">
        <thead class="text-base text-gray-200 uppercase bg-gray-700 font-bold font-mont" >
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-gray-200 border-b border-gray-300 text-sm font-semibold font-mont text-slate-700">
                <th scope="row" class="px-6 py-4">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="bg-gray-200 border-b border-gray-300 text-sm font-semibold font-mont text-slate-700">
                <th scope="row" class="px-6 py-4">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="bg-gray-200 border-b border-gray-300 text-sm font-semibold font-mont text-slate-700">
                <th scope="row" class="px-6 py-4">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
        </tbody>
    </table>
	</div>
  );
}