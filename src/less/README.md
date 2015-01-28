# The `src/less/` Directory

This folder is actually fairly self-explanatory: it contains your LESS/CSS files to be compiled during the build. 
The only important thing to note is that *only* `main.less` will be processed during the build, meaning that all
other stylesheets must be *imported* into that one.

This should operate somewhat like the routing; the `main.less` file contains all of the site-wide styles, while
any styles that are route-specific should be imported into here from LESS files kept alongside the JavaScript
and HTML sources of that component. For example, the `home` section of the site has some custom styles, which
are imported like so:

```css
@import '../app/home/home.less';
```

The same principal, though not demonstrated in the code, would also apply to reusable components. CSS or LESS
files from external components would also be imported. If, for example, we had a Twitter feed directive with
an accompanying template and style, we would similarly import it:

```css
@import '../components/twitterFeed/twitterFeedDirective.less';
```

Using this decentralized approach for all our code (JavaScript, HTML, and CSS) creates a framework where a
component's directory can be dragged and dropped into *any other project* and it will "just work".

I would like to eventually automate the importing during the build so that manually importing it here would no
longer be required, but more thought must be put in to whether this is the best approach.

@import '../../vendor/bootstrap/less/mixins.less';
@import '../../vendor/bootstrap/less/normalize.less';
@import '../../vendor/bootstrap/less/utilities.less';
@import '../../vendor/bootstrap/less/scaffolding.less';
@import '../../vendor/bootstrap/less/type.less';


@import '../../vendor/bootstrap/less/alerts.less';
@import '../../vendor/bootstrap/less/badges.less';
@import '../../vendor/bootstrap/less/bootstrap.less';
@import '../../vendor/bootstrap/less/breadcrumbs.less';
@import '../../vendor/bootstrap/less/button-groups.less';
@import '../../vendor/bootstrap/less/buttons.less';
@import '../../vendor/bootstrap/less/carousel.less';
@import '../../vendor/bootstrap/less/close.less';
@import '../../vendor/bootstrap/less/code.less';
@import '../../vendor/bootstrap/less/component-animations.less';
@import '../../vendor/bootstrap/less/dropdowns.less';
@import '../../vendor/bootstrap/less/forms.less';
@import '../../vendor/bootstrap/less/glyphicons.less';
@import '../../vendor/bootstrap/less/grid.less';
@import '../../vendor/bootstrap/less/input-groups.less';
@import '../../vendor/bootstrap/less/jumbotron.less';
@import '../../vendor/bootstrap/less/labels.less';
@import '../../vendor/bootstrap/less/list-group.less';
@import '../../vendor/bootstrap/less/media.less';

@import '../../vendor/bootstrap/less/modals.less';
@import '../../vendor/bootstrap/less/navbar.less';
@import '../../vendor/bootstrap/less/navs.less';

@import '../../vendor/bootstrap/less/pager.less';
@import '../../vendor/bootstrap/less/pagination.less';
@import '../../vendor/bootstrap/less/panels.less';
@import '../../vendor/bootstrap/less/popovers.less';
@import '../../vendor/bootstrap/less/print.less';
@import '../../vendor/bootstrap/less/progress-bars.less';
@import '../../vendor/bootstrap/less/responsive-utilities.less';

@import '../../vendor/bootstrap/less/tables.less';
@import '../../vendor/bootstrap/less/theme.less';
@import '../../vendor/bootstrap/less/thumbnails.less';
@import '../../vendor/bootstrap/less/tooltip.less';


@import '../../vendor/bootstrap/less/variables.less';
@import '../../vendor/bootstrap/less/wells.less';