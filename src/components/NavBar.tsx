import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Icons } from './Icons'
import NavItems from './NavItems'
import { buttonVariants } from './ui/button'
import Cart from './Cart'

export default function NavBar() {

    const user = null;

    return (
        <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
            <header className='relative bg-white'>
                <MaxWidthWrapper>
                    <div className='border-b border-gray-200'>
                        <div className='flex h-16 items-center'>
                            {/* To: mobile nav */}
                            <div className='ml-4 lg:ml-0'>
                                <Link href='/'>
                                    <Icons.logo />
                                </Link>
                            </div>

                            <div className='ml-auto flex items-center'>
                                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                                    {user ? null : <Link href="/sign-in" className={buttonVariants({variant: 'ghost'})}>Se connecter</Link>}
                                    {user ? null : <span className='h-6 w-px bg-gray-200' aria-hidden='true'/>}
                                    {user ? (<p></p>) : <Link href="/sign-up" className={buttonVariants({variant: 'ghost'})}>Créer un compte</Link>}
                                    {user ? null : <span className='h-6 w-px bg-gray-200' aria-hidden='true'/>}
                                    <div className='ml-4 flow-root lg:ml-6'>
                                        <Cart/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}
