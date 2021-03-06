"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KnockoutRegistrationEditors = (function () {
    function KnockoutRegistrationEditors() {
    }
    KnockoutRegistrationEditors.prototype.register = function (injector) {
        ko.components.register("workshops", {
            template: { fromUrl: "workshops/workshops.html" },
            viewModel: { injectable: "workshops" },
            preprocess: function (element, knockoutComponentParams) {
            }
        });
        ko.components.register("settings", {
            template: { fromUrl: "workshops/settings/settings.html" },
            viewModel: { injectable: "settingsWorkshop" }
        });
        ko.components.register("widgets", {
            template: { fromUrl: "workshops/widgets/widgets.html" },
            viewModel: { injectable: "widgetsWorkshop" }
        });
        ko.components.register("media", {
            template: { fromUrl: "workshops/media/media.html" },
            viewModel: { injectable: "mediaWorkshop" }
        });
        ko.components.register("layouts", {
            template: { fromUrl: "workshops/layouts/layoutsWorkshop.html" },
            viewModel: { injectable: "layoutsWorkshop" }
        });
        ko.components.register("pages", {
            template: { fromUrl: "workshops/pages/pages.html" },
            viewModel: { injectable: "pagesWorkshop" }
        });
        ko.components.register("blogs", {
            template: { fromUrl: "workshops/blogs/blogs.html" },
            viewModel: { injectable: "blogWorkshop" }
        });
        ko.components.register("news", {
            template: { fromUrl: "workshops/news/newsEditor.html" },
            viewModel: { injectable: "newsEditor" }
        });
        ko.components.register("page-templates-workshop", {
            template: { fromUrl: "workshops/pages/pageTemplates.html" },
            viewModel: { injectable: "pageTemplatesWorkshop" }
        });
        ko.components.register("navigation", {
            template: { fromUrl: "workshops/navigation/navigation.html" },
            viewModel: { injectable: "navigationWorkshop" }
        });
        ko.components.register("navigation-details-workshop", {
            template: { fromUrl: "workshops/navigation/navigationDetails.html" },
            viewModel: { injectable: "navigationDetailsWorkshop" }
        });
        ko.components.register("layout-details-workshop", {
            template: { fromUrl: "workshops/layouts/layoutDetailsWorkshop.html" },
            viewModel: { injectable: "layoutDetailsWorkshop" }
        });
        ko.components.register("page-details-workshop", {
            template: { fromUrl: "workshops/pages/pageDetails.html" },
            viewModel: { injectable: "pageDetailsWorkshop" }
        });
        ko.components.register("blog-post-details-workshop", {
            template: { fromUrl: "workshops/blogs/blogPostDetails.html" },
            viewModel: { injectable: "blogPostDetailsWorkshop" }
        });
        ko.components.register("news-element-details-editor", {
            template: { fromUrl: "workshops/news/newsElementDetailsEditor.html" },
            viewModel: { injectable: "newsElementDetailsEditor" }
        });
        ko.components.register("page-selector", {
            template: { fromUrl: "workshops/pages/pageSelector.html" },
            viewModel: { injectable: "pageSelector" }
        });
        ko.components.register("media-selector", {
            template: { fromUrl: "workshops/media/mediaSelector.html" },
            viewModel: { injectable: "mediaSelector" }
        });
        ko.components.register("row-layout-selector", {
            template: { fromUrl: "workshops/rows/rowLayoutSelector.html" },
            viewModel: { injectable: "rowLayoutSelector" }
        });
        ko.components.register("section-layout-selector", {
            template: { fromUrl: "workshops/sections/sectionLayoutSelector.html" },
            viewModel: { injectable: "sectionLayoutSelector" }
        });
        ko.components.register("widget-selector", {
            template: { fromUrl: "workshops/widgets/widgetSelector.html" },
            viewModel: { injectable: "widgetSelector" }
        });
        ko.components.register("color-selector", {
            template: { fromUrl: "workshops/colors/colorSelector.html" },
            viewModel: { injectable: "colorSelector" }
        });
        ko.components.register("hyperlink-selector", {
            template: { fromUrl: "workshops/hyperlinks/hyperlinkSelector.html" },
            viewModel: { injectable: "hyperlinkSelector" }
        });
        ko.components.register("url-selector", {
            template: { fromUrl: "workshops/hyperlinks/urlSelector.html" },
            viewModel: { injectable: "urlSelector" }
        });
        ko.components.register("paper-page-placeholder", {
            viewModel: { injectable: "pagePlaceholderWidget" },
            template: { fromUrl: "editors/page-placeholder/pagePlaceholder.html" },
        });
        ko.components.register("paper-text-editor", {
            template: { fromUrl: "editors/textblock/textblockEditor.html" },
            viewModel: { injectable: "textblockEditor" }
        });
        ko.components.register("formatting", {
            template: { fromUrl: "editors/textblock/formatting/formattingTools.html" },
            viewModel: { injectable: "formattingTools" }
        });
        ko.components.register("hyperlink-editor", {
            template: { fromUrl: "editors/textblock/hyperlink/hyperlinkTools.html" },
            viewModel: { injectable: "hyperlinkTools" }
        });
        ko.components.register("view-manager", {
            template: { fromUrl: "ui/viewManager.html" },
            viewModel: { injectable: "viewManager" }
        });
        ko.components.register("spinner", {
            template: { fromUrl: "ui/spinner.html" },
            viewModel: function () { return null; }
        });
        ko.components.register("dropbucket", {
            template: { fromUrl: "workshops/dropbucket/dropbucket.html" },
            viewModel: { injectable: "dropbucket" }
        });
        ko.components.register("paper-map-editor", {
            template: { fromUrl: "editors/map/mapEditor.html" },
            viewModel: { injectable: "mapEditor" }
        });
        ko.components.register("navbar-editor", {
            template: { fromUrl: "editors/navbar/navbarEditor.html" },
            viewModel: { injectable: "navbarEditor" }
        });
        ko.components.register("picture-editor-editor", {
            template: { fromUrl: "editors/picture/pictureEditor.html" },
            viewModel: { injectable: "pictureEditor" }
        });
        ko.components.register("paper-button-editor", {
            template: { fromUrl: "editors/button/buttonEditor.html" },
            viewModel: { injectable: "buttonEditor" }
        });
        ko.components.register("paper-audio-player-editor", {
            template: { fromUrl: "editors/audio-player/audioEditor.html" },
            viewModel: { injectable: "audioPlayerEditor" }
        });
        ko.components.register("layout-section-editor", {
            template: { fromUrl: "editors/section/sectionEditor.html" },
            viewModel: { injectable: "sectionEditor" }
        });
        ko.components.register("layout-column-editor", {
            template: { fromUrl: "editors/column/columnEditor.html" },
            viewModel: { injectable: "columnEditor" }
        });
        ko.components.register("video-player-editor", {
            template: { fromUrl: "editors/video-player/videoEditor.html" },
            viewModel: { injectable: "videoPlayerEditor" }
        });
    };
    return KnockoutRegistrationEditors;
}());
exports.KnockoutRegistrationEditors = KnockoutRegistrationEditors;
