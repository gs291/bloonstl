import Link from "next/link";


export default function TableOfContents({ tags }) {

    return (
        <>
            <ul>
                {tags.map(tag => (
                    <li key={tag.href}>
                        <Link href={`#${tag.href}`}>
                            <a>{tag.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
