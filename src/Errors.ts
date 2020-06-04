interface IError {
    [key: number]: string
}

export const enum ERROR_CODE {
    NO_ERROR,
    UNHANDLED_ERROR,
    MISSING_FFMPEG,
    MISSING_ARIA2C,
    ELEVATED_SHELL,
    CANCELLED_USER_INPUT,
    MISSING_DIR,
    INVALID_TMP_DIR,
    CANNOT_REMOVE_DIR,
    CANNOT_REMOVE_FILE,
    CANNOT_CREATE_DIR,
    INVALID_INPUT_URLS,
    OUTDIRS_URLS_MISMATCH,
    INVALID_VIDEO_ID,
    INVALID_VIDEO_GUID,
    UNK_FFMPEG_ERROR,
    NO_SESSION_INFO
}

// TODO: create better errors descriptions
export const Error: IError = {
    [ERROR_CODE.NO_ERROR]:              'Clean exit with code 0',

    [ERROR_CODE.UNHANDLED_ERROR]:       'Unhandled error!\n' +
                                        'Timeout or fatal error, please check your downloads directory and try again',

    [ERROR_CODE.ELEVATED_SHELL]:        'Destreamer cannot run in an elevated (Administrator/root) shell.\n' +
                                        'Please run in a regular, non-elevated window.',

    [ERROR_CODE.CANCELLED_USER_INPUT]:  'Input was cancelled by user',

    [ERROR_CODE.MISSING_DIR]:           'A directory is missing',

    [ERROR_CODE.INVALID_TMP_DIR]:       'The selected tmp directory already exists, exiting to preserve content',

    [ERROR_CODE.CANNOT_REMOVE_DIR]:    'The selected directory cannot be deleted',

    [ERROR_CODE.CANNOT_REMOVE_FILE]:    'The selected file cannot be deleted',

    [ERROR_CODE.CANNOT_CREATE_DIR]:     'Unable to create the desired directory',

    [ERROR_CODE.MISSING_FFMPEG]:        'FFmpeg is missing!\n' +
                                        'Destreamer requires a fairly recent release of FFmpeg to download videos',

    [ERROR_CODE.MISSING_ARIA2C]:        'Aria2c is missing!\n' +
                                        'Destreamer requires a fairly recent release of Aria2c to download videos',

    [ERROR_CODE.UNK_FFMPEG_ERROR]:      'Unknown FFmpeg error',

    [ERROR_CODE.INVALID_INPUT_URLS]:    'No valid URL from input',

    [ERROR_CODE.OUTDIRS_URLS_MISMATCH]: 'Output directories and URLs mismatch!\n' +
                                        'You must input the same number of URLs and output directories',

    [ERROR_CODE.INVALID_VIDEO_ID]:      'Unable to get video ID from URL',

    [ERROR_CODE.INVALID_VIDEO_GUID]:    'Unable to get video GUID from URL',

    [ERROR_CODE.NO_SESSION_INFO]:       'Could not evaluate sessionInfo on the page'
};

export const enum CLI_ERROR {
    GRACEFULLY_STOP           = ' ', // gracefully stop execution, yargs way

    MISSING_REQUIRED_ARG      = 'You must specify a URLs source.\n' +
                                'Valid options are -i for one or more URLs separated by sapce or -f for URLs from file.',

    VIDEOURLS_ARG_CONFLICT    = 'Too many URLs sources specified!\n' +
                                'Please specify a single source, either -i or -f (URLs from file)',

    OUTPUTDIR_ARG_CONFLICT    = 'Too many output arguments specified!\n' +
                                'Please specify a single output argument, either -o or --outputDirectories.',

    FILE_INPUT_VIDEOURLS_ARG  = 'Wrong input for option --videoUrls.\n' +
                                'To read URLs from file, use --videoUrlsFile option.',

    INPUT_URLS_FILE_NOT_FOUND = 'Input URL list file not found.'
}
