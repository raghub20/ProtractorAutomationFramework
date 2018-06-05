

export class BaseResource {
    private runMode: string;
    private expectedResult: string;

    public setRunMode(runMode: string) {
        this.runMode = runMode;
    }

    public setExpectedResult(expectedResult: string) {
        this.expectedResult = expectedResult;
    }

    public getRunMode(): string {
        return this.runMode;
    }

    public getExpectedResult(): string {
        return this.expectedResult;
    }
}