"use client"

import React from 'react'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { ShoppingCart } from 'lucide-react'
import { Separator } from './ui/separator';
import { formatPrice } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Cart() {
    const itemCount = 0;

    return (
        <Sheet>
            <SheetTrigger className='group -m-2 flex items-center p-2'>
                <ShoppingCart aria-hidden='true' className=" h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
                    0
                </span>
            </SheetTrigger>
            <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
                <SheetHeader className='space-y-2 pr-6'>
                    <SheetTitle> Panier(0)</SheetTitle>
                </SheetHeader>
                {itemCount > 0 ?
                    (<>
                        <div className='flex w-full flex-col pr-6'>
                            {/* {'TODO: cart logic'} */}
                            liste du panier
                        </div>
                        <div className='space-y-4 pr-6'>
                            <Separator/>
                            <div className='space-y-1.5 pr-6 text-sm'>
                                <div className='flex'>
                                    <span className='flex-1'>Achat</span>
                                    <span>Prix</span>
                                </div>
                                <div className='flex'>
                                    <span className='flex-1'>Coût de livraion</span>
                                    <span>{formatPrice(1)}</span>
                                </div>
                                <div className='flex'>
                                    <span className='flex-1'>Total</span>
                                    <span>{formatPrice(1)}</span>
                                </div>
                            </div>
                            <SheetFooter>
                                <SheetTrigger asChild>
                                    <Link href="/cart" className={buttonVariants({
                                        className : "w-full"})}>
                                            Continuer vos achats
                                        </Link>
                                </SheetTrigger>
                            </SheetFooter>
                        </div>
                    </>)
                    :
                    (<div className='flex h-full flex-col items-center justify-center space-y-1'>
                        
                        <div aria-hidden='true' className='relative h-50 w-60 text-muted-foreground'>
                        <img src="/images/panier.png" alt="panier vide"/>
                        </div>
                        <div className='text-xl font-semibold'>Panier vide...</div>
                        <SheetTrigger asChild>
                            <Link href='/products' className={buttonVariants({
                                variant: "link",
                                size: "sm",
                                className: "text-sm text-muted-foreground"
                            })}>
                                Ajouter des éléments dans votre panier
                            </Link>
                        </SheetTrigger>
                        
                    </div>)}
            </SheetContent>
        </Sheet>
    )
}
