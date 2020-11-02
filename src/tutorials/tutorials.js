import tutorial1Content from './gemicai_tutorial_1.pynbhtml';
import tutorial2Content from './gemicai_tutorial_2.pynbhtml';
import tutorial3Content from './gemicai_tutorial_3.pynbhtml';
import tutorial5Content from './gemicai_tutorial_5.pynbhtml';

export default [
    {
        id: 1,
        title: "Intro to Gemicai",
        sections: [
            {name: "Preliminaries", anchor: "Preliminaries"},
            {name: "Datasets", anchor: "Datasets"},
            {name: "Classifiers", anchor: "Classifiers"},
            {name: "Saving and loading a classifier", anchor: "Saving-and-loading-a-classifier"},
            {name: "Hyper parameter optimisation", anchor: "Hyper-parameter-optimisation"},
            {
                name: "HTML for notebook formatting (you can ignore this)",
                anchor: "HTML-for-notebook-formatting-(you-can-ignore-this)"
            },
        ],
        pynb_link: "https://github.com/Gemicai/Gemicai/blob/master/tutorials/gemicai_tutorial_1.ipynb",
        contents: tutorial1Content
    }, {
        id: 2,
        title: "From data pre-processing to model evaluation",
        sections: [
            {name: "Preliminaries", anchor: "2.0-Preliminaries"},
            {name: "Data preproccessing", anchor: "2.1-Data-preproccessing"},
            {name: "Classifier initialization", anchor: "2.2-Classifier-initialization"},
            {name: "Hyper parameter optimisation", anchor: "2.3-Hyper-parameter-optimisation"},
            {name: "Model evaluation", anchor: "2.4-Model-evaluation"},
        ],
        pynb_link: "https://github.com/Gemicai/Gemicai/blob/master/tutorials/gemicai_tutorial_2.ipynb",
        contents: tutorial2Content
    }, {
        id: 3,
        title: "Gemicai Dataset",
        sections: [
            {name: "Initialize gemset", anchor: "3.1-Initialize-gemset"},
            {name: "Tweaking gemset", anchor: "3.2-Tweaking-gemset"},
        ],
        pynb_link: "https://github.com/Gemicai/Gemicai/blob/master/tutorials/gemicai_tutorial_3.ipynb",
        contents: tutorial3Content
    }, {
        id: 4,
        title: "Unknown",
        sections: [],
        pynb_link: null,
        contents: null
    }, {
        id: 5,
        title: "ClassifierTree",
        sections: [
            {name: "Initialising ClassifierTree", anchor: "3.1-Initialising-ClassifierTree"},
            {name: "Training the tree", anchor: "3.2-Training-the-tree"},
            {name: "Evaluating the tree", anchor: "3.3-Evaluating-the-tree"},
            {name: "Tweaking individual nodes in the tree", anchor: "3.4-Tweaking-individual-nodes-in-the-tree"},
        ],
        pynb_link: "https://github.com/Gemicai/Gemicai/blob/master/tutorials/gemicai_tutorial_5.ipynb",
        contents: tutorial5Content
    },
];
