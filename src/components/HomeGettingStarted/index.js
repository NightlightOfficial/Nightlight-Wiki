import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Leveling & XP',
        icon: 'workspace_premium',
        link: '/docs/basics/leveling',
        description: (
            <>
                What do they mean, how to earn them and more
            </>
        ),
    },
    {
        title: 'NCPs (Nightlight Community Points)',
        icon: 'auto_awesome',
        link: '/docs/basics/ncps',
        description: (
            <>
                Earnable virtual points which you can spend in variety of things on Nightlight
            </>
        ),
    },
    {
        title: 'Privacy & Security',
        icon: 'shield',
        link: '/docs/basics/managing-privacy',
        description: (
            <>
                Feel at ease on Nightlight by using our privacy tools
            </>
        ),
    },
    {
        title: 'Marketplace',
        icon: 'storefront',
        link: '/docs/basics/marketplace',
        description: (
            <>
                Exchange your NCPs for decorative or other items in the Nightlight Marketplace
            </>
        ),
    },
];

function Feature({title, description, icon, link}) {
    return (
        <div className={clsx('col col--4 margin-bottom--lg')}>
            <a href={link} className={clsx('card', styles.featureCard)}>
                <div className="card__header">
                    <Heading as="h3" className={styles.featureTitle}>
            <span className={clsx('material-icons', styles.iconInline)}>
              {icon}
            </span>
                        {title}
                    </Heading>
                </div>
                <div className="card__body">
                    <p>{description}</p>
                </div>
            </a>
        </div>
    );
}

export default function HomeGettingStarted() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="text--start margin-bottom--xl">
                    <Heading as="h2" className={styles.sectionTitle}>
                        Getting started
                    </Heading>
                    <p className={styles.sectionSubtitle}>
                        Learn the basics of Nightlight
                    </p>
                </div>
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}