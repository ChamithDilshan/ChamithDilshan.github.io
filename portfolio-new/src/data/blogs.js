const blogs = [
    {
        id: 'auditory-brainstem-response',
        title: 'Discover Auditory Brainstem Response (ABR) with Me 🧠😀',
        shortDescription: 'Explore how auditory brainstem responses are recorded and analyzed, offering insights into brain function and hearing health.',
        subtitle: 'Your guide to understanding the science behind ABR through analysis and experiments',
        content: [
            {
                type: 'text',
                value: `Hi there! The human body is one of the marvellous creations of nature, right? Have you ever come across the word, "EEG"? Of course, if you are somewhat close to medical jargon, you must. Others, let's say it's some kind of an electrical signal that represents the brain activity. Sounds good?`,
            },
            {
                type: 'text',
                value: `So today, I'm going to talk about something called "Auditory Brainstem Response" (ABR). ABR falls under "Evoked Potentials" (EPs). Wait a second. I know, I'm throwing out a lot of complex words towards you. Let me explain briefly.`,
            },
            {
                type: 'text',
                value: `When there's an external stimulus to our brain, either auditory, visual, somatosensory, etc, there arises a potential in our scalp as the brain's sensory processing to that stimulus. Those are what we call "Evoked Potentials". So when the stimulus is auditory, neural activity elicited by the cochlea of the ear in response to that specific auditory stimulus, is called "Auditory Brainstem Response". Hope it's clear. 🤗`,
            },
            {
                type: 'text',
                value: `Usually this stimulus can be a 'click' or a 'CE-chirp'. The next image you see is a time-domain representation of such ABRs at different stimulus intensity levels. There are five main peaks for an ABR but it's not that clearly noticeable in every case. Because these ABRs lie within the (µV) microvolt range. Also note that the frequency of ABRs lies within 100Hz to 3000Hz and ABR appears within 10 ms usually.`,
            },
            {
                type: 'heading',
                value: 'Anatomical Generators',
            },
            {
                type: 'list',
                items: [
                    'Wave I: Distal portion of cranial nerve VIII',
                    'Wave II: Cochlear nucleus and proximal VIII nerve',
                    'Wave III: Superior olivary complex in the caudal portion of the auditory pons',
                    'Wave IV: Pontine third-order neurons mostly located in the superior olivary complex',
                    'Wave V: From the vicinity of the inferior colliculus',
                ],
            },
            {
                type: 'highlight',
                value: 'Cool. Now it\'s time for the biomedical engineering stuff 🤩',
            },
            {
                type: 'text',
                value: `We did an experiment to record ABR from a healthy person inside our biomedical engineering lab at the University of Moratuwa. We used ADInstruments Octal Bio-Amp™ and ADInstruments PowerLab 16/35™ as our amplifier setup. Also, we used Etymotic Research ER-3C™ insert earphones to provide the auditory stimulus. The stimulus was provided to the right ear while keeping the left ear sealed. These insert earphones have high noise exclusion (30+ dB external noise exclusion) while 70+dB isolation between two ears.`,
            },
            {
                type: 'text',
                value: `The data acquisition was performed with two electrode montages. We used disposable Ag/AgCl electrodes and skin cleansing alcohol swabs.`,
            },
            {
                type: 'text',
                value: `Oh! If you are lost middle of nowhere trying to understand the electrode montages, just think of A1 as the left ear and A2 as the right ear. So, Nasion is a bone near the nose. Inion is from the back of the scalp.`,
            },
            {
                type: 'text',
                value: `We provided the stimulus, each click and chirp, at three different intensity levels 40dB, 60dB and 80 dB. Every stimulus was provided repeatedly throughout a window of one minute and both were recorded with a sampling rate of 10K Hz. Since ABR could have a frequency up to 3000Hz, the sampling rate must be more than twice that (Nyquist theorem).`,
            },
            {
                type: 'heading',
                value: 'Signal Processing',
            },
            {
                type: 'text',
                value: `Since we know that the ABRs are lying in the frequency range of 100Hz to 3000Hz, we can apply a bandpass filter to remove the frequency components out of this range. But still, the ABRs are not visible because the noise and the information have frequency overlappings.`,
            },
            {
                type: 'text',
                value: `This is where "Ensemble Averaging" comes into action. We assume that the signal and noises are uncorrelated, and the noise is a broadband stationary process with a population mean of zero and non-zero variance (σ²). If we average the signal over N repetitions, we reduce the noise variance σ² to σ²/N.`,
            },
            {
                type: 'text',
                value: `So when the number of repetitions increases, we can reduce the noise variance to a greater extent. Since the noise mean is zero, it will do the job perfectly.`,
            },
            {
                type: 'heading',
                value: 'Results',
            },
            {
                type: 'text',
                value: `For electrode montage 1, using CE-chirp at 80 dB, after 1281 repetitions averaged, Wave V (the most clinically analyzed component) is clearly visible. The noise variance is 1281 times smaller than normal.`,
            },
            {
                type: 'heading',
                value: 'Analysis',
            },
            {
                type: 'text',
                value: `Stimulus Comparison: When using chirp as our stimulus, we get higher amplitude and lower latency in ABR. Chirp signal causes synchronous displacement along a larger portion of the basilar membrane.`,
            },
            {
                type: 'text',
                value: `Intensity Effects: As intensity increases, the amplitude rises and the latency decreases because the number of neuron firings increases.`,
            },
            {
                type: 'text',
                value: `Configuration 2 shows higher amplitude because the auditory cortex of the brain is closer to Cz than the mastoid.`,
            },
            {
                type: 'text',
                value: `So that's it! Hope this finds you interesting. Have a great day! Tada 👋`,
            },
            {
                type: 'heading',
                value: 'References',
            },
            {
                type: 'list',
                ordered: true,
                items: [
                    'M. Chertoff, J. Lichtenhan, and M. Willis, "Click- and chirp-evoked human compound action potentials," The Journal of the Acoustical Society of America, vol. 127, no. 5, pp. 2992–2996, May 2010',
                    'R. M. Stelmack and K. G. Wilson, "Extraversion and the effects of frequency and intensity on the auditory brainstem evoked response," Personality and Individual Differences, vol. 3, no. 4, pp. 373–380, Jan. 1982',
                    'A. J. King and Y. S. Sininger, "Electrode Configuration for Auditory Brainstem Response Audiometry," American Journal of Audiology, vol. 1, no. 2, pp. 63–67, Mar. 1992',
                ],
            },
        ],
    },
];

export default blogs;
